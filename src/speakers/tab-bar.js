import React from 'react-native';
import { Text, device } from '../utils';

const {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
} = React;

var modalWidth = device.width - 80;

var styles = StyleSheet.create({
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
    width: modalWidth,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  border: {
    width: modalWidth,
    height: 1,
    marginBottom: 7,
    backgroundColor: '#323232'
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
    borderBottomColor: '#1bce7c',
    transform: [
      {
        rotate: '180deg'
      }
    ]
  }
});

const tabOptions = [
  {
    name: 'Bio'
  },
  {
    name: 'Work'
  }
];

export default class DefaultTabBar extends React.Component {
  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  }

  renderTabOption(tab, page) {
    const isTabActive = this.props.activeTab === page;
    return (
      <TouchableOpacity style={styles.tab} key={tab.name} onPress={() => this.props.goToPage(page)}>
        <View>
          <Text
            style={{
              color: isTabActive ? '#1bce7c' : '#323232',
              fontWeight: isTabActive ? 'bold' : 'normal'
            }}
          >
            {tab.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const numberOfTabs = tabOptions.length;
    const tabWidth = modalWidth / numberOfTabs;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: modalWidth / numberOfTabs,
      height: 10,
      borderColor: '#1bce7c',
      borderTopWidth: 2,
      marginBottom: 15,
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'center'
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, modalWidth / numberOfTabs]
    });

    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          {tabOptions.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
        <View style={styles.border}/>
        <Animated.View style={[tabUnderlineStyle, { left }]}>
          <View style={styles.triangle} />
        </Animated.View>
      </View>
    );
  }
}
