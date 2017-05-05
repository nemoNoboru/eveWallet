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
        <Text>{value}</Text>
        <Text>AVAILABLE BALANCE</Text>
      </View>
    )
  }
}

var balance_container = {
  padding: 100,
  backgroundColor: "#A8A8EC",
  alignItems:'center',
  justifyContent:'center',
}
