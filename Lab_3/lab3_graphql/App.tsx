import React, {ReactText, useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';
// import * as MyQuery from './__generated__/MyQuery';
import Language from './components/Language';
import {TOKEN} from '@env';
import DisplayData from './components/DisplayData';
import Details from './components/Details';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const link = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

interface AppProps {
  lang: ReactText | undefined;
}

const App = (props: AppProps, navigation: any) => {
  const [language, setLanguage] = useState<ReactText | undefined>('All');

  const handleChange = (codeLanguage: string | ReactText) => {
    setLanguage(codeLanguage);
    props.lang = language;
    console.log(codeLanguage);
  };

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.headerView}>
        <Text style={styles.header}>
          Top 20 trending GitHub repos last week
        </Text>
        <Language handleChange={handleChange} language={language} />
      </SafeAreaView>
      <SafeAreaView>
        <ScrollView>
          <DisplayData language={language} navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </ApolloProvider>
  );
};

const RootStack = createStackNavigator();
//https://reactnavigation.org/docs/typescript/

interface RouterData {
  language: ReactText | undefined;
}

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={App} />
        <RootStack.Screen name="Details" component={Details} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: 'grey',
    marginBottom: 0,
  },
  header: {
    fontSize: 30,
    color: 'white',
    padding: 40,
    paddingBottom: 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontFamily: 'calibri',
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  title: {
    fontSize: 30,
    padding: 5,
  },
  stars: {
    fontSize: 15,
    padding: 5,
  },
  description: {
    padding: 5,
  },
});

export default Router;
