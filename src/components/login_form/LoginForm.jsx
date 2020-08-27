import React, { useState } from "react";
import { Card, Image, Input, Button } from "../assets";
import logo from "../../icons/logo.svg";
import "./loginform.scss";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const checkboxHandler = (e) => {
    setChecked(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Thanks for the Coding Test");
  };

  return (
    <div className="LoginForm-Container">
      <Card>
        <Image className="Logo-Container" src={logo} alt="green enery logo" />
        <div className="Title-Container">
          <h2>Example login screen</h2>
          <p>&nbsp;Getting started with Green.</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="Field-Container">
            <Input
              value={email}
              type="email"
              label="Email Address"
              className="Email-Container"
              onChange={emailHandler}
              required
            />
            <Input
              type="checkbox"
              checked={checked}
              label="Remember this device"
              className="Remember-Container"
              onChange={checkboxHandler}
            />
          </div>
          <Button className="Login-Button" type="submit" text="Sign In" />
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
