import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Homepage = ({navigation}: any) => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <View style={styles.homeContent}>
          {/* <Text style={[styles.text, styles.textLogo]}>Welcome</Text> */}
          <Text style={[styles.text, styles.textHeader]}>
            Mini SDK application
          </Text>
          <Text style={[styles.text, styles.textCaption]}>
            Login or create an account
          </Text>
          <View>
            <View>
              <TouchableOpacity
                style={[styles.btn, styles.loginBtn]}
                onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.btnText, styles.loginText]}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, styles.signUpBtn]}
                onPress={() => navigation.navigate('Register')}>
                <Text style={[styles.btnText, styles.signUpText]}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#704646',
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 26,
  },
  text: {
    color: '#ffffff',
  },
  textHeader: {
    fontSize: 40,
    fontWeight: '700',
    marginTop: 50,
  },
  btn: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
  },
  homeContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textLogo: {
    fontSize: 20,
  },
  textCaption: {
    marginBottom: 300,
    fontSize: 16,
    fontWeight: '300',
  },
  loginBtn: {
    backgroundColor: '#ffffff',
  },
  loginText: {
    color: '#444444',
    fontWeight: '700',
  },
  signUpBtn: {
    marginTop: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  signUpText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});

export default Homepage;
