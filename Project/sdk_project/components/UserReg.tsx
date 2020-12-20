import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserReg = ({headerText}: any) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.caption}>{headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#704646',
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 26,
    width: '100%',
  },
  caption: {
    fontSize: 30,
    // fontWeight: 'bold',
    color: 'white',
  },
});

export default UserReg;
