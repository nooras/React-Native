import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as firebase from "firebase";


export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  // TODO: Firebase stuff...
  //console.log('handleSignUp')
  firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
}
render() {
    return (
      <View style={styles.container}>
        <Text style={styles.signtext}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View style={styles.but}>
        <Button title="Sign Up" onPress={this.handleSignUp} />
        </View>
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  signtext:{
    fontSize:30,
    color:'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbdefb'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    margin: 8
  },
  but:{
    marginBottom:8
  }
})