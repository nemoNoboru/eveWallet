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
    thousand: ' , ',
    precision: 2,
    format: '%v %s' // %s is the symbol and %v is the value
    });
    return (
      <View style={card}>
        <View style={container}>
          <Text style={name}> {this.props.t.name.toUpperCase()} </Text>
          <Text style={[s,quantity]}> {value} </Text>
        </View>
        <View style={container}>
          <Text style={{fontSize:14,color:"#b8bbc3",flex:1,fontFamily:'Lato-Regular'}}> {this.props.t.stationName.split("-")[0]} </Text>
          <Text style={{fontSize:14,color:"#000",fontFamily:'Lato-Bold'}}> {this.props.t.price} ISK  x  {this.props.t.quantity} u </Text>
        </View>
      </View>
    );
  }
}

var name = {
  color:'#000',
  fontSize:18,
  flex:1,
  fontFamily:'Lato-Regular',
}

var quantity = {
  fontSize:18,
  fontFamily:'Lato-Bold',
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
