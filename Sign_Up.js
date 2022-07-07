import React, { Component } from "react";
import "./style.css";
class Sign_Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      Password: "",
      users: [],
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    const tempObj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    const tempar = this.state.users;
    tempar.push(tempObj);
    this.setState({ users: tempar });
  };

  render() {
    return (
      <div>
        <from name="Sign_Up" acttion="" method="">
          <h1>Sign_Up Page</h1>
          <div>
            <label class="label">Name :</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            ></input>
          </div>
          <br />
          <div>
            <lable class="label">Email :</lable>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            ></input>
          </div>
          <br />
          <div>
            <lable class="label">Password :</lable>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            ></input>
          </div>
          <br />
          <br />
          <button type="submit" onClick={this.handleButtonClick}>
            Submit
          </button>
          
        </from>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          {this.state.users.map((value, index) => {
            return (
              <div className="box">
                {index + 1}.Email : {value.email} | Password : {value.password}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sign_Up;
