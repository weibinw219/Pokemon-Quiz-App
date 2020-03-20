import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import pokeData from './pokeData.js'

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      isLoading: true,
      dataSource: null
    }
  }


  componentDidMount(){

    this.setState({
      isLoading: false,
      dataSource: pokeData
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
        <Text>Default Page</Text>
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
