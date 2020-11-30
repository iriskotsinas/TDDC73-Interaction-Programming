import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

const DetailScreen = ({route}) => {
  const URL = {uri: route.params.name.node.owner.avatarUrl};

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={URL} style={styles.avatar} />
        </View>
        <View style={styles.userInfo}>
          <Text>Name:</Text>
          <Text>Username:</Text>
          <Text>Member since:</Text>
        </View>
        <View style={styles.userInfo}>
          <Text>
            {route.params.name.node.owner.name
              ? route.params.name.node.owner.name
              : 'undefined'}
          </Text>
          <Text>
            {route.params.name.node.owner.login
              ? route.params.name.node.owner.login
              : 'undefined'}
          </Text>
          <Text>
            {route.params.name.node.owner.createdAt
              ? route.params.name.node.owner.createdAt.substring(0, 10)
              : 'undefined'}
          </Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.heading}>{route.params.name.node.name}</Text>
        <Text>{route.params.name.node.description}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 5,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    margin: 10,
  },
  description: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    paddingBottom: 10,
  },
});
export default DetailScreen;
