import React, { Component } from "react";
import Dashboard from "../dashboard/dashboard";
import API from "../services/API";
import Alert from "../components/alert";
import { Box, TextField, Button, Grid, Paper, Typography } from "@mui/material";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelClick: false,
      viewingBook: {},
      book: {
        title: "",
        author_name: "",
        floor_no: "",
        section_name: "",
      },
      alert: false,
      alertMessage: "",
    };
  }

  handleSubmit = async (event) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    let { title, author_name, floor_no, section_name } = this.state.book;
    try {
      const result = await API.createBook({
        title,
        author_name,
        floor_no,
        section_name,
      });
      console.log(result);
      if (result.status == 200) {
        this.setState({
          alert: true,
          alertMessage: "Book Added Successfully",
        });
        this.setState({
          book: {
            title: "",
            author_name: "",
            floor_no: "",
            section_name: "",
          },
        });
        let timeout = setTimeout(() => {
          this.setState({
            alert: false,
          });
        }, 3000);
        clearInterval(timeout);
      }
    } catch (error) {
      this.setState({
        alert: true,
        alertMessage: "there is some issue.!",
      });
      let timeout = setTimeout(() => {
        this.setState({
          alert: false,
        });
      }, 3000);
      clearInterval(timeout);
    }
  };

  render() {
    return (
      <Dashboard {...this.props}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">Add Book</Typography>
            <Box
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              component="form"
              onSubmit={this.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(e) => {
                  this.setState({
                    book: { ...this.state.book, title: e.target.value },
                  });
                }}
                value={this.state.book.title}
                margin="normal"
                required
                label="Title"
                autoFocus
              />
              <TextField
                onChange={(e) => {
                  this.setState({
                    book: { ...this.state.book, author_name: e.target.value },
                  });
                }}
                value={this.state.book.author_name}
                margin="normal"
                required
                label="Author"
              />
              <TextField
                onChange={(e) => {
                  this.setState({
                    book: { ...this.state.book, floor_no: e.target.value },
                  });
                }}
                value={this.state.book.floor_no}
                margin="normal"
                required
                label="Floor"
              />
              <TextField
                onChange={(e) => {
                  this.setState({
                    book: { ...this.state.book, section_name: e.target.value },
                  });
                }}
                value={this.state.book.section_name}
                margin="normal"
                required
                label="Section"
              />
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Add Book
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Alert open={this.state.alert} message={this.state.alertMessage} />
      </Dashboard>
    );
  }
}
