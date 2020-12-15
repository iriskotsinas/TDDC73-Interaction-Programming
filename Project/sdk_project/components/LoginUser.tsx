import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UserReg from './UserReg';
import LoginButton from './LoginButton';
import LoginFields from './LoginFields';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface userInfo {
  [index: string]: {
    password: string;
    username: string;
  };
}

const LoginUser = ({navigation}: any) => {
  const [password, setPassword] = useState({value: '', error: ''});
  const [username, setUsername] = useState({value: '', error: ''});
  const [result, setResult] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <UserReg headerText="Welcome Back" navigation={navigation} />
      </View>
      <KeyboardAwareScrollView
        style={styles.scrollView}
        extraHeight={100}
        enableOnAndroid={true}>
        <View style={styles.insideSmallContainer}>
          <Text style={styles.textStyle}>Username </Text>
          <LoginFields
            setState={setUsername}
            state={username}
            label="Username"
            returnKeyType="next"
            value={username.value}
            error={!!username.error}
            errorText={username.error}
            secureTextEntry={false}
            type={'username'}
            autoCompleteType="email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.insideSmallContainer}>
          <Text style={styles.textStyle}>Password </Text>
          <LoginFields
            setState={setPassword}
            state={password}
            label="Password"
            returnKeyType="next"
            value={password.value}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry={true}
            type={'password'}
            autoCompleteType="off"
            keyboardType="default"
          />
        </View>
        <View style={styles.btnContainer}>
          <LoginButton
            color="#704646"
            title={'Log in'}
            setUsername={setUsername}
            setPassword={setPassword}
            username={username}
            password={password}
            navigation={navigation}
            setResult={setResult}
          />
        </View>
        <Text style={styles.result}>{result}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
              navigation.navigate('Register');
            }}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginUser;

const styles = StyleSheet.create({
  result: {
    fontSize: 12,
    paddingRight: 30,
    color: 'red',
    paddingTop: 20,
  },
  btnContainer: {
    justifyContent: 'center',
    paddingTop: '10%',
    paddingHorizontal: '5%',
  },
  scrollView: {
    width: '100%',
  },
  link: {
    fontWeight: 'bold',
    color: '#704646',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 8},
    backgroundColor: '#ffffff',
  },
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    marginBottom: '15%',
  },
  inputBox: {
    height: 35,
    borderRadius: 4,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  headerlogo: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    justifyContent: 'center',
    marginTop: '5%',
  },
  row: {
    flexDirection: 'row',
    marginLeft: '5%',
  },
  insidecontent: {
    flexDirection: 'column',
    width: '90%',
    padding: '2%',
  },
  column: {
    alignItems: 'center',
    width: '100%',
    paddingTop: '1%',
    flex: 1,
  },
  loginButton: {
    padding: '5%',
    borderRadius: 4,
  },
  insideSmallContainer: {
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
  textStyle: {
    fontSize: 14,
    paddingRight: 30,
    padding: '1%',
  },
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
});
