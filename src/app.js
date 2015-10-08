import React from 'react-native';
import ScrollableTabView from '../react-native-scrollable-tab-view';
import TabBar from './tab-bar';
import Speakers from './speakers';
import Navbar from './nav-bar';
import Map from './map';
import Info from './info';
import Schedule from './schedule';

const {
  StyleSheet,
  View,
  StatusBarIOS
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends React.Component {
  componentDidMount() {
    if (StatusBarIOS) {
      StatusBarIOS.setStyle('light-content');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <ScrollableTabView renderTabBar={() => <TabBar />}>
          <Schedule/>
          <Speakers/>
          <Map/>
          <Info/>
        </ScrollableTabView>
      </View>
    );
  }
}
