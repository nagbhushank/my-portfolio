import React from "react";
import { Button, input } from 'react-bootstrap';

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
        user: null,
        password: null,
    };
  }

  Submit()
  {
      alert("User: " + this.state.user + "Password: " + this.state.password);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" name="user" onChange={(e)=>{this.setState({user:e.target.value})}} />
        <br/><br/>
        <input type="text" name="user" onChange={(e)=>{this.setState({password:e.target.value})}} />
        <br/><br/>
        <Button onClick={()=>{this.Submit()}}>Submit</Button>
      </div>
    );
  }
}
