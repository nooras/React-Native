import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert,ScrollView } from 'react-native';
//import { addItem } from '../services/ItemService';
import { db } from '../config/db';
import {Platform, InteractionManager} from 'react-native';

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = '_lt_' + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}
const uuid = require('uuid');
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: uuid.v1(),
      Name: '',
      Desc:'',
      Price:'',
      Rating:'',
      error: false
    }
    //this.inputData = this.inputData.bind(this);
    this.submitData = this.submitData.bind(this);
    
  }
  /*componentDidMount() {
      db
      .ref(`Newdata/${this.state.uid}`)
      .on('value', snap => console.log('from db', snap.val()));
  }*/
  submitData(event) {
    event.preventDefault();
      db
      .ref(`Newdata/${this.state.uid}`)
      .push({
        Name: this.state.Name,
        Desc: this.state.Desc,
        Price: this.state.Price,
        Rating: this.state.Rating
        /*Name:'pencil',
        Desc:'writing',
        Price:'10',
        Rating:'5'*/
        
      })
      .catch(error => console.log(error));
      Alert.alert("saved successfully");
      }
  /*inputData(event) {
    const Name = this.refs.name.value;
    const Desc = this.refs.desc.value;
    const Price = this.refs.price.value;
    const Rating = this.refs.rating.value;
    console.log(Name,Desc,Price,Rating,this.state.Name)
    this.setState({Name, Desc, Price,Rating });
  }*/
  /*handleChange(e) {
    this.setState({
      name: e.nativeEvent.text
    });
  }
  handleSubmit() {
    //console.log(this.state.name)
    addItem(this.state.name);
      Alert.alert(
        'Item saved successfully'
       );
  }*/
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput
              style={styles.itemInput}
              placeholder="Name of item"
              onChangeText={(Name) => this.setState({Name})}
              value={this.state.Name}
              //onChange={this.inputData}
              //ref="name"
            />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
          <TextInput
              style={styles.itemDescInput}
              placeholder="Description of item"
              multiline={true}
              onChangeText={(Desc) => this.setState({Desc})}
              value={this.state.Desc}
            />
            <TextInput
              style={styles.itemInput}
              placeholder="Price of item"
              onChangeText={(Price) => this.setState({Price})}
              value={this.state.Price}
            />
            <TextInput
              style={styles.itemInput}
              placeholder="Rating of item"
              onChangeText={(Rating) => this.setState({Rating})}
              value={this.state.Rating}
            />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.submitData}
              >
              <Text
                  style={styles.buttonText}>
                  Add       
              </Text>
        
            </TouchableHighlight>
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#9575cd'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    margin: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  itemDescInput:{
    height: 100,
    padding: 4,
    margin: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});