import React from 'react';
import {View,Text} from 'react-native';
import {Header,Item,Icon,Input,Button} from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';
//import console = require('console');

class Search extends React.Component{
    constructor(props){
        super(props);
     
        this.state = {
           pokeSearch: "",
           onCall:true,
           data:{}
        };
    }
    searchPoke = () =>{
        this.setState({onCall:true});
        var self = this;
        axios.get("http://pokeapi.co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
        .then(response =>{
            console.log(response.data);
            self.setState({data:response.data});
            self.setState({onCall:false});

        })
        .catch(error => {
            console.log(error);
        });
    }
    renderBody = () =>{
        if(this.state.onCall){
            return(
                <PokeLoader></PokeLoader>
                )
        }else{
            return(
                <SearchBody data={this.state.data}></SearchBody>
            )
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Header
                     style={styles.item}
                    searchBar
                    rounded
                >
                    <Item> 
                        <Icon name="ios-search" onPress={this.searchPoke}></Icon>
                        <Input 
                            value={this.state.pokeSearch}
                            placeholder='Search Pokemon'
                            onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
                        ></Input>
                    </Item>

                </Header>
                {this.renderBody()}
            </View>
        )
    }
}

const styles = {
    item:{
        marginTop:24
    }
}

export default Search;