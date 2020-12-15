import React from 'react';
import {validateUsername, validatePassword, signIn} from './Validator';
import {Button} from 'react-native';

interface ButtonProps {
  color: string;
  title: string;
  setUsername: any;
  setPassword: any;
  username: {
    value: string;
    error: string;
  };
  password: {
    value: string;
    error: string;
  };
  setResult: any;
  navigation: any;
}

const LoginButton = ({
  color,
  title,
  setPassword,
  setUsername,
  username,
  password,
  navigation,
  setResult,
}: ButtonProps) => {
  const loginButton = () => {
    const emailError = validateUsername(username.value);
    const passwordError = validatePassword(password.value);

    if (emailError || passwordError) {
      setUsername({...username, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    } else {
      const userExists = signIn(username.value, password.value);

      if (userExists) {
        console.log(userExists);
        navigation.navigate('UserPage');
      } else {
        setResult('User does not exist!');
      }
    }
  };

  return <Button color={color} title={title} onPress={loginButton} />;
};

export default LoginButton;
