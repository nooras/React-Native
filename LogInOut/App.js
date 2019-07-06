/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
// import the different screens
import Loading from './src/Loading';
import SignUp from './src/SignUp';
import Login from './src/Login';
import Main from './src/Main';
// create our app's navigation stack
const MainNavigator = createStackNavigator(
  {
    Loading:{
      screen:Loading
    },
    SignUp:{
      screen:SignUp
    },
    Login:{
      screen:Login
    },
    Main:{
      screen:Main
    }
  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(MainNavigator);


export default App;
