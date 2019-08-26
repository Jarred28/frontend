import React, { Component } from "react";

class PasswordShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    return (
      <div>
        <input
          type={this.state.hidden ? "password" : "text"}
        />
        <button onClick={this.toggleShow}>Show / Hide</button>
      </div>
    );
  }
}

export default PasswordShowHide;