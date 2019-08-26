import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Greeting from "./Greeting";
import styled from "styled-components"

let OnboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px red solid;
`

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    departments: ""
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSignup}>
            <OnboardContainer>
            <Greeting />
            <label>Your name (just want to know that to call you)</label>
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              id="username"
              type="text"
              placeholder="USERNAME"
            />
            <label>Your email address</label>
            <input
              value={this.state.email}
              onChange={this.handleInputChange}
              id="email"
              type="email"
              placeholder="email"
            />
            <label>Your new password</label>
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              type="password"
            />
            <label>Re-enter Password to Confirm</label>
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              type="password"
            />

            <button>CREATE ACCOUNT</button>
            <div>
              <p>
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>
            </OnboardContainer>
          </form>
        </div>
      </div>
    );
  }

  handleSignup = event => {
    event.preventDefault();

    const register = {
      username: this.state.username,
      password: this.state.password,
      departments: this.state.departments
    };

    const endpoint = "";
    axios
      .post(endpoint, register)
      .then(res => {
        axios
          .post(
            "",
            this.state
          )
          .then(res => {
            console.log("LOGIN RESPONSE", res);
            localStorage.setItem("jwt", res.data.token);
            this.props.history.push("/Lists");
          });
      })
      .catch(error => {
        console.error("REGISTER ERROR", error);
      });
  };

  handleInputChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };
}
