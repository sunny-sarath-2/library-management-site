import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./screens/signin";
import Signup from "./screens/signup";
import Books from "./screens/books";
import Users from "./screens/users";
import MyBooks from "./screens/mybooks";
import Landing from "./screens/landing";
import AddBooks from "./screens/addBooks";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin" exact component={Signin} />
          <Route path="/dashboard" exact component={Landing} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/books" exact component={Books} />
          <Route path="/book/:id" exact component={Books} />
          <Route path="/users" exact component={Users} />
          <Route path="/mybooks" exact component={MyBooks} />
          <Route path="/add-books" exact component={AddBooks} />
          <Route path="*" component={Signin} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
