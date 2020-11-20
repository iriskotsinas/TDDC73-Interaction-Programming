// import amex from './assets/amex.png';
// import visa from './assets/visa.png';
// import mastercard from './assets/mastercard.png';
// import discover from './assets/discover.png';

import React, {useState, useRef} from 'react';

import {View, StatusBar, StyleSheet, Animated} from 'react-native';

import Card from './components/Card';
import InputForm from './components/InputForm';

const {Value, timing} = Animated;

const App = () => {
  const amex = require('./assets/amex.png');
  const visa = require('./assets/visa.png');
  const mastercard = require('./assets/mastercard.png');
  const discover = require('./assets/discover.png');

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCode, setCardCode] = useState('');
  const [cardLength, setCardLength] = useState(0);
  const [cardId, setCardId] = useState('');

  const imgList = {
    amex: amex,
    visa: visa,
    mastercard: mastercard,
    discover: discover,
  };

  const cardAnimation = useRef(new Value(0)).current;

  const animation = (value: number) => {
    timing(cardAnimation, {
      toValue: value,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <Card
          {...{
            cardNumber,
            cardName,
            cardExpiry,
            cardCode,
            cardLength,
            cardId,
            cardAnimation,
            imgList,
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <InputForm
          {...{
            cardNumber,
            setCardNumber,
            cardName,
            setCardName,
            cardExpiry,
            setCardExpiry,
            cardCode,
            setCardCode,
            animation,
            cardLength,
            setCardLength,
            cardId,
            setCardId,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});

export default App;
