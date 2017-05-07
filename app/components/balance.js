import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

var currencyFormatter = require('currency-formatter');

export default class Balance extends Component {
  render(){

    var value = currencyFormatter.format(this.props.balance, {
    symbol: 'ISK',
    decimal: '.',
    thousand: ',',
    precision: 2,
    format: '%v %s' // %s is the symbol and %v is the value
    });

    return(
      <View style={balance_container}>
        <Text style={head}>{value}</Text>
        <Text style={available}>AVAILABLE BALANCE</Text>
      </View>
    )
  }
}

var balance_container = {
  padding: 20,
  paddingTop:70,
  paddingBottom:70,
  backgroundColor: "#f0c05d",
  alignItems:'center',
  justifyContent:'center',
}

var head = {
  fontFamily:'Lato-Regular',
  color:'#4f2e2f',
  fontSize:33,
}

var available = {
  fontFamily:'Lato-Regular',
  fontSize:14,
  color:'#4f2e2f',
}
