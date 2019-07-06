import React from 'react';
import { Text, View, TextInput, Button, Alert, TouchableOpacity} from 'react-native';

/*export default function App() {
  state : {
    todo : "This is message"
  }
  return (
    <View style={styles.viewStyle}>
      <Text>Hello world! from Nooras :)</Text>
      <TextInput style = {styles.inputStyle} />
      <Button title="submit"/>
      <Text>{this.state.todo}</Text>
    </View>
  );
}*/
class App extends React.Component{
  /*state : {
    todo : "This is message"
  }*/
  constructor(props){
    super(props);
 
    this.state = {
       text: "",
       todo : [],
    };
 }
 addTodo = () =>{
  var newTodo = this.state.text;
  var arr = this.state.todo;
  arr.push(newTodo);
  this.setState({todo: arr , text:""});
  //this.state.todo = this.state.text
}
deleteTodo = (t) =>{
  var arr = this.state.todo;
  var pos = arr.indexOf(t);
  arr.splice(pos,1);
  this.setState({todo:arr});

}
renderTodos = () =>{
  return this.state.todo.map((t) => {
    return(
      <TouchableOpacity key={t}>
        <Text 
          style={styles.todo}
          onPress = {()=>{this.deleteTodo(t)}}
        >{t}</Text>
      </TouchableOpacity>
    )
  })
}
  render(){
    return (
      <View style={styles.wholeStyle}>
      <View style={styles.viewStyle}>
        <Text style={styles.header}>Notes App</Text>
        <TextInput 
          style = {styles.inputStyle} 
          onChangeText = {(text)=>this.setState({text})} 
          value = {this.state.text}
        />
        <Button title="Add" onPress ={ this.addTodo }/>
        {this.renderTodos()}
      </View>
      </View>
    );
  }
}


const styles = {
  wholeStyle :{flex:1,backgroundColor : "#0d47a1"},
  viewStyle : {marginTop : 30,alignItems:'center',justifyContent:'center' , margin :10},
  inputStyle : {height : 40,borderColor : "white",color : "white" ,borderWidth : 2,width:250 ,margin: 10},
  header : {fontSize : 40, color : "white" , fontWeight : 'bold', margin :0},
  todo : {fontSize : 20,color : "white"}
}

export default App;