import React from 'react';
import {validateUsername, validatePassword, validateName} from './Validator';
import {Button} from 'react-native';

interface ButtonProps {
  color: string;
  title: string;
  setEmail: any;
  setPassword: any;
  setName: any;
  email: {
    value: string;
    error: string;
  };
  password: {
    value: string;
    error: string;
  };
  name: {
    value: string;
    error: string;
  };
  navigation: any;
}

const RegisterButton = ({
  color,
  title,
  setPassword,
  setEmail,
  setName,
  email,
  password,
  name,
  navigation,
}: ButtonProps) => {
  const signUpButton = () => {
    const nameError = validateName(name.value);
    const emailError = validateUsername(email.value);
    const passwordError = validatePassword(password.value);

    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    navigation.navigate('UserPage');
  };

  return <Button color={color} title={title} onPress={signUpButton} />;
};

export default RegisterButton;
