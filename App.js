import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import pokeData from './pokeData.js'

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      isLoading: true,
      dataSource: null,
      randomNum: 0
    }
  }


  componentDidMount(){

    this.setState({
      isLoading: false,
      dataSource: pokeData,
      randomNum: 0
    })
  }


  generateRandNum(){
    this.setState({
      randomNum: Math.floor(Math.random() * (151-1)) + 1
    })
  }


  render(){


    if(this.state.isLoading){
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      )
    }
    return (

      <View style={styles.container}>
        <Text>{this.state.dataSource[this.state.randomNum].name.japanese}</Text>
        <Button title='Click Me' onPress={()=> this.generateRandNum()}/>
      </View>

    )
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
