import React from "react";
import { Card, Image, Input, Button } from "../assets";
import logo from "../../icons/logo.svg";
import "./loginform.scss";

function LoginForm(props) {
  return (
    <div className="LoginForm-Container">
      <Card>
        <Image src={logo} alt="green enery logo" />
        <div className="Title-Container">
          <h2>Example login screen</h2>
          <p>&nbsp;Getting started with Green.</p>
        </div>
        <Input type="email" label="Email Address" />
        <Input
          type="checkbox"
          label="Remember this device"
          className="Checkbox-Container"
        />
        <Button className="Login-Button" type="submit" text="Sign In" />
      </Card>
    </div>
  );
}

export default LoginForm;
