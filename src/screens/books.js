import React, { Component } from "react";
import Dashboard from "../dashboard/dashboard";
import API from "../services/API";
import Album from "../components/album";
import Model from "../components/model";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import Alert from "../components/alert";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modelClick: false,
      viewingBook: {},
      searchBook: "",
      user: {},
      alert: false,
      alertMessage: "",
      userId: "",
    };
  }

  async componentDidMount() {
    let userId = localStorage.getItem("user");
    this.getBooks();
    this.getUser(userId);
    this.setState({
      userId,
    });
  }

  getUser = async (id) => {
    try {
      let result = await API.getUserById(id);
      this.setState({
        user: result.result,
      });
    } catch (error) {
      localStorage.clear();
      this.props.history.replace("/signin");
    }
  };

  getBooks = async () => {
    try {
      let result = await API.getBooks();
      console.log(result);
      this.setState({
        books: result.result,
      });
    } catch (error) {
      localStorage.clear();
      this.props.history.replace("/signin");
    }
  };

  handleSearch = (e) => {
    this.setState({ searchBook: e.target.value });
    this.searchBook(e.target.value);
  };

  searchBook = async (searchBook) => {
    try {
      let result = await API.searchBook(searchBook);
      this.setState({
        books: result.result,
      });
    } catch (error) {
      localStorage.clear();
      this.props.history.replace("/signin");
    }
  };

  handleButtonClick = async (_id) => {
    try {
      let result = await API.attachBook({
        newBookId: _id,
        ...this.state.user,
      });

      if (result.result.modifiedCount === 1) {
        this.setState({
          alert: true,
          alertMessage: "Book Added Successfully",
        });
        let timeout = setTimeout(() => {
          this.setState({
            alert: false,
          });
        }, 3000);
        clearTimeout(timeout);
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
            value={this.state.searchBook}
            onChange={this.handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        <Album
          books={this.state.books}
          onViewClick={(_id) => {
            this.setState({
              modelClick: true,
            });
            const books = this.state.books;
            const viewingBook = books.filter((book) => book._id === _id);
            this.setState({ viewingBook: viewingBook[0] });
            console.log(_id, viewingBook[0]);
          }}
          onButtonClick={this.handleButtonClick}
        />
        <Model
          open={this.state.modelClick}
          data={this.state.viewingBook}
          handleClose={() => {
            this.setState({
              modelClick: false,
            });
          }}
        />
        <Alert open={this.state.alert} message={this.state.alertMessage} />
      </Dashboard>
    );
  }
}
