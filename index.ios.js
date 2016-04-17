/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './app/components/home.js';
import Instagram from './app/components/instagram.js';
import Search from './app/components/search.js';

class instabuy extends Component {
  render() {
    return (
      <Navigator initialRoute={{id: 'Home', name: 'Home'}} renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        />
    );
  }

  renderScene (route, navigator) {
    switch (route.id) {
      case 'Home':
        return (<Home navigator={navigator} />);
      case 'instagram':
        return (<Instagram navigator={navigator}/>);
    case 'search':
        return (<Search navigator={navigator}/>);
    }
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

AppRegistry.registerComponent('instabuy', () => instabuy);
