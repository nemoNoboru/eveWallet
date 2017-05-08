/**
 * EveWallet. Made by Fvieira
 *
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { TabViewAnimated, TabViewPagerPan, SceneMap } from 'react-native-tab-view';

import BalanceMain from './app/components/balance_main.js';

const Balance = () => {return <BalanceMain/>}
const Transactions = () => {return <BalanceMain/>}

export default class eveWallet extends Component {
  state = {
      index: 0,
      routes: [
        { key: '1', title: 'Journal' },
        { key: '2', title: 'Transactions' },
      ],
    };

    _handleChangeTab = index => this.setState({ index });

    //_renderHeader = props => <TabViewPagerPan {...props} />;

    _renderScene = ({route}) => {
      switch (route.key) {
        case '1':
          return <BalanceMain />;
        case '2':
          return <BalanceMain />;
      default:
        return null;
      }
    }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
        lazy={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})




AppRegistry.registerComponent('eveWallet', () => eveWallet);
