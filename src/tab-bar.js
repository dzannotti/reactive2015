import React from 'react-native';
import { Icon } from 'react-native-icons';

const {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;


const styles = StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    width: 65
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    borderTopWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopColor: '#1bce7c',
    backgroundColor: '#0f1726'
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabText: {
    fontFamily: 'Raleway',
    color: '#cdcdcd'
  },
  tabTextActive: {
    fontFamily: 'Raleway',
    color: '#1bce7c'
  }
});

const tabOptions = [
  {
    name: 'Schedule',
    icon: 'ios-calendar-outline'
  },
  {
    name: 'Speakers',
    icon: 'mic-b'
  },
  {
    name: 'Map',
    icon: 'map'
  },
  {
    name: 'Info',
    icon: 'ios-information-outline'
  },
]

export default class TabBar extends React.Component {
  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  };

  renderTabOption(tab, page) {
    var isTabActive = this.props.activeTab === page;
    return (
      <TouchableOpacity key={page} onPress={() => this.props.goToPage(page)}>
        <View style={styles.tab}>
          <Icon name={'ion|' + tab.icon} size={30} color={isTabActive ? '#1bce7c': '#cdcdcd'} style={styles.tabIcon}/>
          <Text style={isTabActive ? styles.tabTextActive : styles.tabText}>{tab.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.tabs}>
        {tabOptions.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  }
}
