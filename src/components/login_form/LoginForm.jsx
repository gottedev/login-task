import React, { useState } from 'react';
import { Card, Image, Input, Button } from '../assets';
import logo from '../../icons/logo.svg';
import './loginform.scss';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const checkboxHandler = (e) => {
    setChecked(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert('Thanks for the Coding Test');
  };

  return (
    <div className="LoginForm-Container">
      <Card>
        <Image className="Logo-Container" src={logo} alt="green enery logo" />
        <div className="Title-Container">
          <h2>Example login screen</h2>
          <p>Getting started with Green.</p>
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
              onClick={checkboxHandler}
              childElement={<span className="Checkbox-Decorator" />}
            />
          </div>
          <Button className="Login-Button" type="submit" text="Sign In" />
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
