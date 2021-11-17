import React from "react";
import Dashboard from "../dashboard/dashboard";
import API from "../services/API";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  async componentDidMount() {
    let userId = localStorage.getItem("user");

    this.getUser(userId);
  }

  getUser = async (id) => {
    let result = await API.getUserById(id);
    this.setState({
      user: result.result,
    });
  };

  render() {
    return (
      <Dashboard>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>{`welcome ${this.state.user?.username || ""}`}</h1>
          </Paper>
        </Grid>
      </Dashboard>
    );
  }
}
