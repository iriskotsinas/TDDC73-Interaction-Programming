import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';

interface ElementProp {
  title: string;
  year: string;
  poster: any;
  rating: string;
  posterurl: string;
}

interface CarouselProps {
  items: Array<ElementProp>;
  itemsPerSlide: number;
}

export const Carousel = (props: CarouselProps) => {
  const {items} = props;
  const itemsPerSlide =
    props.itemsPerSlide === undefined ? 1 : props.itemsPerSlide;

  const [interval, setInterval] = React.useState<number | undefined>(1);
  const [totalIntervals, setTotalIntervals] = React.useState<number>(1);
  const [width, setWidth] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState<boolean | undefined>(
    false,
  );

  const init = (initialWidth: number) => {
    setWidth(initialWidth);
    if (items === undefined) {
      return;
    }
    const totalItems = items.length;
    setTotalIntervals(Math.ceil(totalItems / itemsPerSlide));
  };

  const getInterval = (rest: number) => {
    for (let i = 1; i <= totalIntervals; i++) {
      if (rest + 1 < (width / totalIntervals) * i) {
        return i;
      }
      if (i === totalIntervals) {
        return i;
      }
    }
  };

  let bullets = [];
  for (let i = 1; i <= totalIntervals; i++) {
    bullets.push(
      <Text
        key={i}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.bullet,
          opacity: interval === i ? 0.5 : 0.1,
        }}>
        &bull;
      </Text>,
    );
  }

  return (
    <View style={styles.container}>
      <Text>YOUR FILMS</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * totalIntervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width);
          const thisInterval = getInterval(data.nativeEvent.contentOffset.x);
          setInterval(thisInterval);
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast">
        {items &&
          items.map((item: any, index: number) => {
            return (
              <ScrollView key={index}>
                <View>
                  <Modal
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(true)}>
                    <View style={styles.modal}>
                      <Text
                        style={{
                          ...styles.modalText,
                        }}>{`IMDB-rating: ${item.rating}`}</Text>
                      <Button
                        color="#704646"
                        title="Hide"
                        onPress={() => {
                          setModalVisible(false);
                        }}
                      />
                    </View>
                  </Modal>
                </View>
                <TouchableOpacity
                  testID="totalFilm"
                  key={index}
                  style={styles.stat}
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  <Image style={styles.image} source={{uri: item.posterurl}} />
                  <Text testID="film" style={{...styles.statText}}>
                    {item.title}
                  </Text>
                  <View style={styles.statHold}>
                    <Text style={{...styles.statLabel}}>{item.year}</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            );
          })}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalText: {
    fontSize: 25,
    marginVertical: 250,
    marginHorizontal: 40,
    textAlign: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: 'white',
  },
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  image: {
    aspectRatio: 2 / 3,
    width: '100%',
  },
  container: {
    width: '100%',
    backgroundColor: '#fbfbfb',
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#fcfcfc',
    shadowOpacity: 1,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
  stat: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flex: 1,
  },
  statText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    paddingTop: 20,
  },
  statHold: {
    width: '100%',
    marginBottom: 8,
  },
  statLabel: {
    width: '100%',
    textAlign: 'left',
    fontSize: 11,
    fontWeight: '600',
    paddingTop: 5,
  },
});

export default Carousel;
