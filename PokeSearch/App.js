import React from 'react';
import { StyleSheet, Text, View, Platform,ImageBackground } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

//var myBackground = require('./assets/landing.jpg')

class App extends React.Component {
  constructor(props){
    super(props);
 
    this.state = {
       currentScreen: "Landing"
    };
  }
  switchScreen=(currentScreen) =>{
    this.setState({currentScreen})
  }

  renderSearch =() =>{
    if(this.state.currentScreen === 'Landing'){
      return(
        <Landing switchScreen = {this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === 'Search'){
      return(
        <Search></Search>
      )
    }
  }

  render(){
    return (
      <View style={{ flex: 1}}>
        {this.renderSearch()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
};

export default App;
