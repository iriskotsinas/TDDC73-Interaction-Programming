import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {useMyQueryQuery} from '../src/generated/graphql';
import {ReactText} from 'react';
import { useNavigation } from '@react-navigation/native';

interface DisplayData {
  language: ReactText | undefined;
  navigation: any;
}

const getDate = () => {
  let date = new Date();
  date.setDate(date.getDate() - 7);
  let dateToday =
    date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  return dateToday;
};

const DisplayData = (dataProps: DisplayData, {navigation}: any) => {
  console.log(dataProps.language);
  const date = getDate();
  console.log(date);
  const navigation2 = useNavigation();

  const {loading, data, error} = useMyQueryQuery({
    variables: {
      // first: 25,
      // query: 'created:>' + getDate() + ' sort:stars-desc language:' + language,
      // type: 'REPOSITORY',
      query: `language:${dataProps.language} stars:>10000`,
      pollInterval: 500,
    },
  });
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error || !data) {
    return <Text>ERROR</Text>;
  }

  const renderData = data.search.edges;
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View>
          {renderData?.map(function (name: any) {
            return (
              <TouchableOpacity
                onPress={() => navigation2.navigate('Details', {name: name})}
                style={styles.row}
                key={name.node.name}>
                <Text style={styles.heading}>{name.node.name}</Text>
                <Text style={styles.subheading}>
                  {`${
                    name.node.owner.login ? name.node.owner.login + '/' : ''
                  }`}
                  {name.node.name}
                </Text>
                <Text style={styles.description}>{name.node.description}</Text>
                <Text style={styles.text_stars}>
                  stars:{name.node.stargazers.totalCount} forks:
                  {name.node.forks.totalCount}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//  {/* onPress={() => navigation.navigate('Details', {name: name})}
//  style={styles.row}
//  key={name.node.name}> */}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#EAF2F8',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    //height: ScreenHeight - 128,
  },
  heading: {
    fontSize: 18,
  },
  subheading: {
    color: 'gray',
  },
  description: {
    marginBottom: 10,
    marginTop: 10,
  },
  text_stars: {
    textAlign: 'right',
    color: 'gray',
  },
  row: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 4,
    padding: 10,
  },
});

export default DisplayData;
