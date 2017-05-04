/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import requestTransactionsFromEve from './app/core/walletFetcher';

export default class eveWallet extends Component {
  constructor(props){
    super(props)
    this.state = {balance:"Loading..."}
  }

  componentDidMount(){
    requestTransactionsFromEve().then(
      (data) => {this.setState({balance:data})}
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Eve wallet</Text>
        <Text>
          {this.state.balance}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('eveWallet', () => eveWallet);
