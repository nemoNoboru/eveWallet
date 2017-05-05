import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

var currencyFormatter = require('currency-formatter');

export default class Transaction extends Component {
  render() {
    if(this.props.t.type == 'sell'){
      var s = sell;
    }else{
      var s = buy;
    }
    var value = currencyFormatter.format(this.props.t.price*this.props.t.quantity, {
    symbol: 'ISK',
    decimal: '.',
    thousand: ',',
    precision: 2,
    format: '%v %s' // %s is the symbol and %v is the value
    });
    return (
      <View style={card}>
        <View style={container}>
          <Text style={{color:'#000',fontSize:17,fontWeight: 'bold',flex:1}}> {this.props.t.name} </Text>
          <Text style={[s,{fontSize:17,fontWeight: 'bold'}]}> {value} </Text>
        </View>
        <View style={container}>
          <Text style={{flex:1}}> {this.props.t.time} </Text>
        </View>
        <View style={container}>
          <Text style={{color:"#a0a0a0",flex:1}}> {this.props.t.stationName} </Text>
        </View>
      </View>
    );
  }
}

var container = {
  flex:1,
  flexDirection:'row',
  width: "100%",
}

var card = {
  padding:10,
}

var sell = {
  color: '#000000',
}
var buy = {
  color: '#ff0000',
}
