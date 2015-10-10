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
          <Schedule viewer={this.props.viewer}/>
          <Speakers viewer={this.props.viewer}/>
          <Map/>
          <Info viewer={this.props.viewer}/>
        </ScrollableTabView>
      </View>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        ${Speakers.getFragment('viewer')}
        ${Info.getFragment('viewer')}
        ${Schedule.getFragment('viewer')}
      }`
  }
});
