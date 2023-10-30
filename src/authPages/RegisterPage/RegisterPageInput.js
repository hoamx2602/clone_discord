import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

function RegisterPageInput(props) {
  const { mail, setMail, username, setUsername, password, setPassword } = props;
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter an e-mail address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter an username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter an password"
      />
    </>
  );
}

export default RegisterPageInput;
