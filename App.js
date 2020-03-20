import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, Image, ImageBackground, Platform } from 'react-native';
import pokeData from './pokeData.js'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: null,
      randomNum: 0
    }
  }


  componentDidMount() {

    this.setState({
      isLoading: false,
      dataSource: pokeData,
      randomNum: 0
    })
  }


  generateRandNum() {
    this.setState({
      randomNum: Math.floor(Math.random() * (151 - 1)) + 1
    })
  }


  render() {



    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      )
    }
    return (



      <View style={styles.container}>
        <View style={styles.backgroundStyle}>
        </View>
        <View style={styles.shadow}>
          <Image style={styles.image} source={this.state.dataSource[this.state.randomNum].picture} />

        </View>


        <Text style={styles.text}>{this.state.dataSource[this.state.randomNum].name.japanese}</Text>
        <Button title='点我' onPress={() => this.generateRandNum()} />
      </View>







    )
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 200,
    alignItems: 'center',
    
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {






    height: 200,
    width: 200,

  },
  text: {
    fontFamily: Platform.OS === "ios" ? "Apple Color Emoji" : "Roboto",
    margin: 25,
    fontSize: 30,
    color: "black",
    fontWeight: "800"

  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  },

  shadow: {


    width: 350,
    height: 300,


    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },


  backgroundStyle: {
    borderRadius: 25,
    position: "absolute",
    
    borderTopColor: "blue",
    borderTopWidth: 300,
    borderRightWidth: 350,
    borderRightColor: 'green',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  }
});
