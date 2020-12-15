import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput as Input} from 'react-native-paper';

interface RegisterFields {
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

const RegisterFields = ({
  errorText,
  type,
  setState,
  ...props
}: RegisterFields) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={'#000000'}
        underlineColor="transparent"
        mode="outlined"
        // placeholder={`Enter your ${type}`}
        onChangeText={(text: string) => setState({value: text, error: ''})}
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

export default RegisterFields;
