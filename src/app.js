import React from 'react-native';
import Relay from 'react-relay';
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

class App extends React.Component {
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

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        allUsers(first: 5) {
          edges {
            node {
              id,
              credentials {
                 facebook {
                  displayName
                }
              }
            }
          }
        }
      }
    `,
  },
});
