/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var SwipeMenuListView = require('./SwipeMenuListView');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ToastAndroid,
} from 'react-native';

// class Demo4 extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SwipeMenuListView style={styles.listView} array={["Java", "C", "C++", "C#", "Python", "PHP"
//                   , "Visual Basic .NET", "JavaScript", "Assembly Language", "Ruby", "Perl"
//                   , "Delphi", "Visual Basic", "Swift", "MATLAB", "Pascal"]}>
//         </SwipeMenuListView>
//       </View>
//     );
//   }
// }

class Demo4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SwipeMenuListView style={styles.listView} array={["Java", "C", "C++", "C#", "Python", "PHP"
                  , "Visual Basic .NET", "JavaScript", "Assembly Language", "Ruby", "Perl"
                  , "Delphi", "Visual Basic", "Swift", "MATLAB", "Pascal"]} 
                  onDelete={(event)=>{
                       ToastAndroid.show(event.nativeEvent.language, ToastAndroid.SHORT);
                    }
                  }>
        </SwipeMenuListView>
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
  listView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

AppRegistry.registerComponent('Demo4', () => Demo4);
