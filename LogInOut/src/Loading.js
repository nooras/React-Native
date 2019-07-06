import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
//import firebase from 'react-native-firebase';
import * as firebase from "firebase";



export default class Loading extends React.Component {

    componentWillMount(){
        const firebaseConfig = {
          apiKey : 'AIzaSyBOKOXHoWioQ523VKg8M6n-PlXGYN9Esyc',
          authDomain : 'signinup-fab0a.firebaseapp.com',
        }
        firebase.initializeApp(firebaseConfig);
    }  

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'Main' : 'SignUp')
        })
      }
    

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbdefb'
  }
})