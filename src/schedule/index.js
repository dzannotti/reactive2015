import React from 'react-native';
import Relay from 'react-relay';
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

class Schedule extends React.Component {
  prepareSchedule() {
    // todo: cleanup this part
    // too much harcoding
    const compare = (a,b)  => (a.startAt > b.startAt) ? 1 : ((b.startAt > a.startAt) ? -1 : 0);
    const days = [[], [], []];
    this.props.viewer.allEvents.edges.forEach(({ node }) => days[node.day].push(node));
    days[0].sort(compare);
    days[1].sort(compare);
    days[2].sort(compare);
    return days;
  }

  render() {
    const days = this.prepareSchedule();
    return (
      <View style={styles.container}>
        <ScrollableTabView topBar renderTabBar={() => <TabBar />}>
          <Day events={days[0]}/>
          <Day events={days[1]}/>
          <Day events={days[2]}/>
        </ScrollableTabView>
      </View>
    );
  }
}

export default Relay.createContainer(Schedule, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        allEvents(first: 100) {
          edges {
            node {
              day,
              startsAt,
              endsAt,
              type,
              excerpt,
              title,
            }
          }
        }
      }`
  }
});
