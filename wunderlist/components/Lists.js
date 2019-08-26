import React, { Component } from "react";
import axiosWithAuth from "./utils/axiosWithAuth.js";
import axios from "axios";
import { NavLink, Link, withRouter } from "react-router-dom";

class Lists extends Component {
  constructor() {
    super();
    this.state = {
      Lists: []
    };
  }

  componentDidMount() {
    console.log("hihihi");

    axios
      .get("")
      .then(res => {
        this.setState({ Lists: res.data });
        console.log("res", res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.Lists.length)
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    return (
      <div>
        <div />
        <div>
          {this.state.Lists.map(Lists => (
            <div key={classroom.id}>
              <h2>{Lists.List_name}</h2>
              <h3>{Lists.type}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default axiosWithAuth(Lists);
