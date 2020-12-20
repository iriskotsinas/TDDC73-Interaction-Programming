import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {validateUsername, validatePassword, validateName} from './Validator';

interface InputFields {
  errorText: string;
  value: string;
  error: any;
  secureTextEntry: boolean;
  type: string;
  label: string;
  returnKeyType: any;
  autoCompleteType: any;
  keyboardType: any;
  setState: any;
  state: {
    value: string;
    error: string;
  };
}

const InputFields = ({
  errorText,
  type,
  setState,
  state,
  ...props
}: InputFields) => {
  const enterValidate = (text: string) => {
    if (type === 'email') {
      const usernameError = validateUsername(state.value);
      if (usernameError) {
        console.log('Email is not correct');
        setState({value: text, error: usernameError});
        return;
      } else {
        setState({value: text, error: ''});
        console.log('Email is correct');
      }
    } else if (type === 'password') {
      setState({value: text, error: ''});
      const passwordError = validatePassword(text);
      if (passwordError) {
        console.log('Password is not correct');
        setState({value: text, error: passwordError});
        return;
      } else {
        setState({value: text, error: ''});
        console.log('Password is correct');
      }
    } else {
      setState({value: text, error: ''});
      const nameError = validateName(text);
      if (nameError) {
        console.log('Name is not correct');
        setState({value: text, error: nameError});
        return;
      } else {
        setState({value: text, error: ''});
        console.log('Name is correct');
      }
    }
  };
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={'#000000'}
        underlineColor="transparent"
        mode="outlined"
        onChangeText={(text: string) => enterValidate(text)}
        theme={{colors: {primary: 'grey', text: 'black'}}}
        {...props}
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: 'grey',
    color: 'grey',
  },
  error: {
    fontSize: 14,
    color: '#ff0000',
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default InputFields;
