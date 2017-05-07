import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class Divider extends Component {
  render(){
    return(
      <View style={divider}>
      <Text style={text}> {this.props.date.fromNow().toUpperCase()} </Text>
      </View>
    )
  }
}

var divider = {
  width:'100%',
  padding:10,
  backgroundColor:"#f6f6f6",
}

var text = {
  fontFamily:'Lato-Bold',
  color:"#b8bbc3",
  fontSize:14,
}
