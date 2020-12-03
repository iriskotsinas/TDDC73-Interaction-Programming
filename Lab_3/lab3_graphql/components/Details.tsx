import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

const Details = ({route}: any) => {
  const IMAGE = {uri: route.params.name.node.owner.avatarUrl};
  console.log(route.params.name.node.owner);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={IMAGE} style={styles.image} />
        </View>
        <View style={styles.info}>
          <Text>Name:</Text>
          <Text>Username:</Text>
          <Text>Member since:</Text>
          <Text>Total commits:</Text>
        </View>
        <View style={styles.info}>
          <Text>
            {route.params.name.node.name
              ? route.params.name.node.name
              : 'undefined'}
          </Text>
          <Text>
            {route.params.name.node.owner.login
              ? route.params.name.node.owner.login
              : 'undefined'}
          </Text>
          <Text>
            {route.params.name.node.createdAt
              ? route.params.name.node.createdAt.substring(0, 10)
              : 'undefined'}
          </Text>
          <Text>
            {route.params.name.node.defaultBranchRef.target.history.totalCount
              ? route.params.name.node.defaultBranchRef.target.history
                  .totalCount
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
  info: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
    margin: 10,
  },
});
export default Details;
