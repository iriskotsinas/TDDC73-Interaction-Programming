import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import UserReg from './UserReg';
import RegisterFields from './RegisterFields';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterButton from './RegisterButton';

const Register = ({navigation}: any) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  return (
    <View style={styles.container}>
      <UserReg headerText="Welcome" navigation={navigation} />
      <KeyboardAwareScrollView
        style={styles.scrollView}
        extraHeight={100}
        enableOnAndroid={true}>
        <ScrollView>
          <View style={styles.insideSmallContainer}>
            <RegisterFields
              setState={setName}
              state={name}
              label="Name"
              returnKeyType="next"
              value={name.value}
              error={!!name.error}
              errorText={name.error}
              type="name"
              secureTextEntry={false}
              autoCompleteType="off"
              keyboardType="default"
            />
            <RegisterFields
              setState={setEmail}
              state={email}
              label="Email"
              returnKeyType="next"
              value={email.value}
              error={!!email.error}
              errorText={email.error}
              type="email"
              secureTextEntry={false}
              autoCompleteType="email"
              keyboardType="email-address"
            />
            <RegisterFields
              setState={setPassword}
              state={password}
              label="Password"
              returnKeyType="done"
              value={password.value}
              error={!!password.error}
              errorText={password.error}
              type="password"
              secureTextEntry
              autoCompleteType="off"
              keyboardType="default"
            />
            <View style={styles.btnContainer}>
              <RegisterButton
                color="#704646"
                title={'Register'}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                name={name}
                email={email}
                password={password}
                navigation={navigation}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
                navigation.navigate('Login');
              }}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 8},
    backgroundColor: '#ffffff',
  },
  scrollView: {
    width: '100%',
  },
  btnContainer: {
    justifyContent: 'center',
    paddingHorizontal: '0%',
    marginTop: '5%',
  },
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginTop: '5%',
  },
  link: {
    fontWeight: 'bold',
    color: '#704646',
  },
  insideSmallContainer: {
    justifyContent: 'center',
    padding: '5%',
  },
});
