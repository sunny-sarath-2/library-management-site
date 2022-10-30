import React, { Component } from "react";
import Table from "../components/table";
import Dashboard from "../dashboard/dashboard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import API from "../services/API";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
  { id: "username", label: "Name" },
  { id: "email", label: "Email" },
  {
    id: "type",
    label: "Type",

    align: "right",
    format: (value) => (value === 1 ? "librarian" : "student"),
  },
  {
    id: "books",
    label: "books",

    align: "right",
    format: (value) => value.length,
  },
];

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchUser: "",
    };
  }

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    try {
      let result = await API.getUsers();
      console.log(result.result);
      this.setState({
        users: result.result,
      });
    } catch (error) {
      localStorage.clear();
      this.props.history.replace("/signin");
    }
  };

  handleSearch = (e) => {
    this.setState({ searchUser: e.target.value });
    this.searchUser(e.target.value);
  };

  searchUser = async (searchUser) => {
    try {
      if (searchUser !== "") {
        let result = await API.searchUser(searchUser);
        this.setState({
          users: result.result,
        });
      } else {
        this.getUsers();
      }
    } catch (error) {
      localStorage.clear();
      this.props.history.replace("/signin");
    }
  };

  render() {
    return (
      <Dashboard {...this.props}>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>Search</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={this.state.searchUser}
            onChange={this.handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Table rows={this.state.users} columns={columns} />
          </Paper>
        </Grid>
      </Dashboard>
    );
  }
}
