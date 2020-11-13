/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { Header } from 'react-native-elements';


const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState("");

  return (
    <>
    <Header
      placement="left"
      centerComponent={{ text: 'LAB 1', style: { color: '#fff' } }}
      containerStyle={{
          backgroundColor: '#008080',
          justifyContent: 'space-around',
        }}
    />
    <SafeAreaView style={styles.container}>
        <View style={styles.center}>
            <Image source={require("./assets/similarlogo.png")} style={styles.image} />
        </View>
          <View style={styles.columns}>
                    <View style={styles.rows}>
            <View style={styles.containerButtons}>
              <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.text}>BUTTON 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.text}>BUTTON 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerButtons}>
              <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.text}>BUTTON 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.text}>BUTTON 4</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
          <View style={styles.containerMail}>
              <Text style={styles.mailText}>Email:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => onChangeText(text)}
                value={value}
              />
          </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  image: {
    flex: 1,
    maxHeight: 180,
    minHeight: 120,
    resizeMode: "contain",
    marginTop: 30,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  columns: {
    flexDirection: "column",
    marginVertical: 10,
    flex: 1,
  },
  rows: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 80,
    justifyContent: "space-evenly",
  },
  containerButtons: {
    flexDirection: 'column',
    width: '40%',
    justifyContent: 'flex-start'
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 20,
    marginBottom: 0,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 15,
  },
  textInput: {
    flex: 2,
    borderBottomColor: 'pink',
    borderBottomWidth: 2,
    marginRight: 20
  },
  mailText: {
    flex: 1,
    fontSize: 15,
    marginRight: 20,
    textAlign: 'right',
    alignSelf: 'center'
  },
  containerMail: {
    //flex: 1,
    flexDirection: "row",
    //margin: 10,
    //maxHeight: 80,
    //justifyContent: 'space-evenly',
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
