import React from 'react';
import { StyleSheet, View} from 'react-native';
import types from '../types'

const TypeHandler = props =>{


    return (
        <View style={[styles.backgroundStyle, {borderTopColor:types[1].color}]}>
        </View>
    )
}



const styles = StyleSheet.create({
    backgroundStyle: {
    borderRadius: 25,
    position: "absolute",
    
    borderTopColor: "blue",
    borderRightColor: 'green',
    borderTopWidth: 300,
    borderRightWidth: 350,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  }
})

export default TypeHandler

