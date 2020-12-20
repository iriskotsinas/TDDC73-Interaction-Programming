import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Carousel from '../components/Carousel';
import UserReg from '../components/UserReg';

const UserPage = ({navigation}: any) => {
  const items = require('../data/carouselData.json');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <UserReg headerText="Welcome" navigation={navigation} />
      </View>
      <Text>Let’s start</Text>
      <Text>Successfully signed in.</Text>
      <View style={styles.btnContainer}>
        <Button
          color="#704646"
          title={'Logout'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <Carousel itemsPerSlide={2} items={items} />
    </SafeAreaView>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 8},
    backgroundColor: '#fcfcfc',
  },
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    marginBottom: '15%',
  },
  btnContainer: {
    justifyContent: 'center',
    paddingTop: '10%',
    paddingHorizontal: '5%',
  },
});
