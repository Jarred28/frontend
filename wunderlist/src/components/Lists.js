import React, { Component } from "react";
import axiosWithAuth from "./utils/axiosWithAuth.js";
import axios from "axios";
import { NavLink, Link, withRouter } from "react-router-dom";

class Lists extends Component {
  constructor() {
    super();
    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    console.log("hihihi");

    axios
      .get("")
      .then(res => {
        this.setState({ lists: res.data });
        console.log("res", res);
      })
      .catch(err => {
        console.log(err);
      });
  }
 
  render() {
    if (!this.state.lists.length)
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    return (
      <div>
        <div />
        <div>
          {this.state.lists.map(item => (
            <div key={item.id}>
              <h2>{item.List_name}</h2>
              <h3>{item.type}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default axiosWithAuth(Lists);
