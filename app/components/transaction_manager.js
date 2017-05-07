import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Transaction from './transaction';
import Divider from './divider';

export default class TransactionManager extends Component {
  render(){
    var transactions = this.manage()
    return  <View>{transactions}</View>
  }

  manage = () => {
    var div_setted = false
    var p_transactions = []
    var t = this.props.transactions

    if(t.length == 0){
      return null
    }

    p_transactions.push(<Divider date={t[0].time}/>)
    p_transactions.push(<Transaction t={t[0]}/>)

    for (var i = 1; i < t.length; i++) {
      if(t[i-1].time.date() !== t[i].time.date()){
        if(!div_setted){
          p_transactions.push(<Divider date={t[i].time}/>)
          div_setted = true
        }
      }else{
        p_transactions.push(<Transaction t={t[i]}/>)
        div_setted = false
      }
    }
    return p_transactions
  }
}
