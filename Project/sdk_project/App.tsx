import React from 'react';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import UserPage from './pages/UserPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Homepage}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          options={{headerShown: false}}
          name="UserPage"
          component={UserPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
