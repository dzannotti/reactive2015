import React from 'react-native';
import { Text, device, colors } from '../utils';

const {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated
} = React;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  tabs: {
    width: device.width,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  border: {
    width: device.width,
    height: 1,
    marginBottom: 7,
    backgroundColor: colors.black
  },
  triangle: {
    width: 0,
    height: 0,
    marginTop: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.green,
    transform: [
      {
        rotate: '180deg'
      }
    ]
  }
});

const tabOptions = [
  {
    name: 'Workshops'
  },
  {
    name: 'Day 1'
  },
  {
    name: 'Day 2'
  }
];

export default class TabBar extends React.Component {
  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  };

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;

    return (
      <TouchableOpacity style={[styles.tab]} key={name.name} onPress={() => this.props.goToPage(page)}>
        <View>
          <Text style={{color: isTabActive ? colors.green : colors.black, fontWeight: isTabActive ? 'bold' : 'normal'}}>{name.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const numberOfTabs = tabOptions.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: device.width / numberOfTabs,
      height: 10,
      borderColor: colors.green,
      borderTopWidth: 2,
      marginBottom: 15,
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'center'
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, device.width / numberOfTabs]
    });

    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          {tabOptions.map((tab, idx) => this.renderTabOption(tab, idx))}
        </View>
        <View style={styles.border}/>
        <Animated.View style={[tabUnderlineStyle, { left }]}>
          <View style={styles.triangle} />
        </Animated.View>
      </View>
    );
  }
}
