import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');
//const {Value} = Animated;

interface Card {
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCode: string;
  cardLength: number;
  cardId: string;
  cardAnimation: any;
  imgList: any;
}

const Card = ({
  cardNumber,
  cardName,
  cardExpiry,
  cardCode,
  cardId,
  cardAnimation,
  imgList,
}: Card) => {
  const forntrotateY = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const backrotateY = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-180deg', '-360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          styles.backCard,
          {
            transform: [{rotateY: backrotateY}],
          },
        ]}>
        <Image source={require('../assets/17.jpeg')} style={styles.card} />
        <View style={styles.top} />
        <View style={styles.view}>
          <Text
            style={[
              styles.text,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                flex: 1,
                paddingRight: 10,
                color: 'black',
                textAlign: 'right',
                fontSize: 15,
              },
            ]}>
            {cardCode}
          </Text>
        </View>
        {/* <View style={styles.bottom} /> */}
        <View style={styles.backContainer}>
          <Image source={imgList[cardId]} style={styles.backImage} />
        </View>
      </Animated.View>

      <Animated.View
        style={[
          styles.frontCard,
          styles.imageContainer,
          {
            transform: [{rotateY: forntrotateY}],
          },
        ]}>
        <Image source={require('../assets/17.jpeg')} style={styles.card} />
        <View style={styles.overlayText}>
          <View style={styles.cardRow}>
            <Image source={require('../assets/chip.png')} style={styles.chip} />
            <Image source={imgList[cardId]} style={styles.chip} />
          </View>
          <View style={styles.cardRow}>
            <Text style={styles.text}>{cardNumber}</Text>
          </View>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.textMinor}>Card Holder</Text>
              <Text style={styles.text}>{cardName}</Text>
            </View>
            <View>
              <Text style={styles.textMinor}>Expires</Text>
              <Text style={styles.text}>{cardExpiry}</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    height: height / 3.5,
  },
  imageContainer: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject,
    padding: 0,
  },
  chip: {
    width: '20%',
    height: '50%',
    resizeMode: 'contain',
  },
  card: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  frontCard: {
    padding: 20,
    backfaceVisibility: 'hidden',
  },
  backCard: {
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    flexDirection: 'column',
  },
  text: {
    fontSize: 22,
    color: 'white',
  },
  textMinor: {
    fontSize: 14,
    color: 'white',
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '33%',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewFront: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view: {
    height: '15%',
    width: '90%',
    position: 'absolute',
    top: '50%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  top: {
    height: '20%',
    width: '110%',
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    opacity: 0.85,
  },
  middle: {
    flex: 2,
    height: 45,
    backgroundColor: '#8c8c8c',
  },
  bottom: {
    height: 40,
    backgroundColor: '#f0f0f0',
  },
  backContainer: {
    width: '80%',
    height: '20%',
    position: 'absolute',
    top: '70%',
  },
  backImage: {
    width: '25%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
});
