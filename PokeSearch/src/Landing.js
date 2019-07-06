import React from 'react';
import {View,Text,Platform,ImageBackground} from 'react-native';
import {Button} from 'native-base';


class Landing extends React.Component{
    render(){
        return(
            <ImageBackground style={styles.container} source={require('../assets/landing.jpg')}>
                <View style={styles.viewStyle}>
                <Text style={styles.titleStyle}>Welcome to pokesearch</Text>
                <Button 
                    block={true}
                    style={styles.buttonStyle}
                    onPress={()=>this.props.switchScreen("Search")}
                >
                    <Text style={styles.buttonText}>Start Searching</Text>
                </Button>
                </View>
            </ImageBackground>
       )
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
    viewStyle:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    titleStyle:{
      fontSize:30,
      color: "blue",
      alignItems:"center"
    },
    buttonStyle:{
      margin:10
    },
    buttonText:{
      color:'white'
    }
  };
  

export default Landing;