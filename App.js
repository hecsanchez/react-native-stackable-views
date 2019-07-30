import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Home } from 'app/containers';

export default class App extends React.Component {

  render() {
    return (
      <>
        <SafeAreaView style={{ backgroundColor: '#5acbcb'}}/>
        <SafeAreaView style={{ backgroundColor: '#ffffff'}}>
          <Home></Home>
        </SafeAreaView>
      </>
    );
  }
};