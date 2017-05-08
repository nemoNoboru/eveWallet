import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';

import TransactionManager from './transaction_manager';
import Balance from './balance';
import {
  requestTransactionsFromEve,
  requestBalanceFromEve
} from '../core/walletFetcher';


export default class BalanceMain extends Component {
  constructor(props){
    super(props)
    this.state = {transactions:[], refreshing:true}
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    this.setState({refreshing:true})
    requestTransactionsFromEve().then(
      (data) => {this.setState({transactions:data, refreshing:false})}
    )
    requestBalanceFromEve().then(
      (balance) => {this.setState({balance:balance})}
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}
      refreshControl = {
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.fetchData}/>
      }>
      <Balance balance={this.state.balance}/>
        <TransactionManager transactions={this.state.transactions}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
