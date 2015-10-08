import React from 'react-native';
import ScrollableTabView from '../../react-native-scrollable-tab-view';
import TabBar from './tab-bar';
import Day from './day';

const {
  View,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class Info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView topBar={true} renderTabBar={() => <TabBar />}>
          <Day nr={1}/>
          <Day nr={2}/>
          <Day nr={3}/>
        </ScrollableTabView>
      </View>
    );
  }
}
