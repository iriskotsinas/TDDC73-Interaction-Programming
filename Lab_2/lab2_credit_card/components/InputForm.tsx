import React from 'react';

import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

interface InputForm {
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCode: string;
  cardLength: number;
  cardId: string;
  setCardNumber: (cardNumber: string) => void;
  setCardName: (cardName: string) => void;
  setCardExpiry: (cardExpiry: string) => void;
  setCardCode: (cardCode: string) => void;
  setCardLength: (cardLength: number) => void;
  setCardId: (cardId: string) => void;
  animation: (ani: number) => void;
}

const InputForm = ({
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
}: InputForm) => {
  const nameValidate = new RegExp('^[a-zA-z ]*$');

  const refresh = () => {
    setCardNumber('');
    setCardName('');
    setCardExpiry('');
    setCardCode('');
    setCardLength(19);
    setCardId('');
  };

  const checkImage = (id: string) => {
    var firstNr = id.substring(0, 1);
    var amexcard = id.substring(1);

    switch (firstNr) {
      case '3': //American Express
        if (amexcard === '7' || amexcard === '4') {
          setCardLength(18);
          setCardId('amex');
        }
        break;
      case '4': //Visa
        setCardLength(19);
        setCardId('visa');
        break;
      case '5': //Mastercard
        setCardLength(19);
        setCardId('mastercard');
        break;
      case '6': //Discover
        setCardLength(19);
        setCardId('discover');
        break;
    }
  };

  const checkNumber = (text: string) => {
    let formattedText: string = text.split(' ').join('');
    if (formattedText.length > 0) {
      formattedText = formattedText!
        .match(new RegExp('.{1,4}', 'g'))!
        .join(' ');
    }
    if (text.length > 0) {
      var nr = text[0];

      if (nr === '3' && text.length > 1) {
        var nextNr = text[1];
        nr = nr + nextNr;
      }
      checkImage(nr);
    } else {
      setCardId('visa');
    }
    setCardNumber(formattedText);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <View style={styles.view}>
          <Text style={styles.text}>Card Number</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="#### #### #### ####"
            placeholderTextColor="#8c8c8c"
            value={cardNumber}
            maxLength={cardLength || 19}
            onChangeText={(text) => {
              checkNumber(text);
            }}
            onFocus={() => animation(0)}
          />
        </View>

        <View style={[styles.view, {flexDirection: 'row'}]}>
          <View style={[styles.view, {flex: 1, paddingRight: 10}]}>
            <Text style={styles.text}>Expiry Date</Text>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="MM/YY"
              placeholderTextColor="#8c8c8c"
              value={cardExpiry}
              maxLength={5}
              onChangeText={(text) => {
                let formattedText: string = text.split('/').join('');
                if (formattedText.length > 0) {
                  formattedText = formattedText!
                    .match(new RegExp('.{1,2}', 'g'))!
                    .join('/');
                }

                setCardExpiry(formattedText);
              }}
              onFocus={() => animation(0)}
            />
          </View>

          <View style={[styles.view, {flex: 1, paddingLeft: 10}]}>
            <Text style={styles.text}>Secure Code</Text>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="###"
              placeholderTextColor="#8c8c8c"
              value={cardCode}
              maxLength={3}
              onChangeText={(text) => setCardCode(text)}
              onFocus={() => animation(1)}
            />
          </View>
        </View>

        <View style={styles.view}>
          <Text style={styles.text}>Name On Card</Text>
          <TextInput
            style={styles.input}
            placeholder="Firstname Lastname"
            placeholderTextColor="#8c8c8c"
            value={cardName}
            maxLength={15}
            onChangeText={(text) => {
              if (text.length === 0) {
                return setCardName(text);
              }
              if (nameValidate.test(text)) {
                setCardName(text);
              }
            }}
            onFocus={() => animation(0)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={refresh}>
        <Text style={[styles.text, {color: '#000'}]}>Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    margin: 20,
  },
  view: {
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    color: 'teal',
    fontWeight: '600',
  },
  input: {
    height: 60,
    borderWidth: 1.5,
    borderColor: '#bfbfbf',
    paddingLeft: 30,
    fontSize: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#e3d474',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
