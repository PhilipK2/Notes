import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  inputChange = event => {
const {name, value} = event.target;

    this.setState({
      [name]:value
    });
  };

  submitForm = event => {
    const {name, value} = event.target;
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({username: "", password: ""});
  };


  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          value = {this.state.firstName}
          name = "username"
          onChange = {this.inputChange}
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button onClick={this.submitForm}>Submit</button>
      </form>
    );
  }
}

export default Form;
