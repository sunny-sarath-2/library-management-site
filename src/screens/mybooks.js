import React, { Component } from "react";
import Dashboard from "../dashboard/dashboard";
import API from "../services/API";
import Album from "../components/album";
import Model from "../components/model";
import Alert from "../components/alert";

export default class MyBooks extends Component {
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
    this.getBooks(userId);
    this.getUser(userId);
    this.setState({
      userId,
    });
  }

  getUser = async (id) => {
    let result = await API.getUserById(id);
    this.setState({
      user: result.result,
    });
  };

  getBooks = async (_id) => {
    let result = await API.getuserBooks(_id);

    this.setState({
      books: result?.result?.books || [],
    });
  };

  handleButtonClick = async (_id) => {
    let result = await API.detachBook({
      oldBookId: _id,
      ...this.state.user,
    });
    if (result.result.modifiedCount === 1) {
      this.setState({
        alert: true,
        alertMessage: "Book Submitted Successfully",
      });
      let timeout = setTimeout(() => {
        this.setState({
          alert: false,
        });
      }, 3000);
      clearTimeout(timeout);
      this.getBooks(this.state.userId);
    }
  };

  render() {
    return (
      <Dashboard>
        <Album
          books={this.state.books}
          myBook={true}
          onViewClick={(_id) => {
            this.setState({
              modelClick: true,
            });
            const books = this.state.books;
            const viewingBook = books.filter((book) => book._id === _id);
            this.setState({ viewingBook: viewingBook[0] });
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
