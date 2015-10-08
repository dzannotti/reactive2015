var React = require('react-native');
var {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} = React;

var deviceWidth = Dimensions.get('window').width;

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
    width: deviceWidth - 80,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  border: {
    width: deviceWidth - 80,
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

var DefaultTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;

    return (
      <TouchableOpacity style={[styles.tab]} key={name.name} onPress={() => this.props.goToPage(page)}>
        <View>
          <Text style={{color: isTabActive ? '#1bce7c' : '#323232', fontWeight: isTabActive ? 'bold' : 'normal'}}>{name.name}</Text>
        </View>
      </TouchableOpacity>
    );
  },

  render() {
    var numberOfTabs = this.props.tabs.length;
    var tabWidth = (deviceWidth  - 80) / numberOfTabs;
    var tabUnderlineStyle = {
      position: 'absolute',
      width: (deviceWidth  - 80)/ numberOfTabs,
      height: 10,
      borderColor: '#1bce7c',
      borderTopWidth: 2,
      marginBottom: 15,
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'center'
    };

    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, (deviceWidth  - 80) / numberOfTabs]
    });

    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          {tabOptions.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
        <View style={styles.border}/>
        <Animated.View style={[tabUnderlineStyle, {left}]}>
          <View style={[styles.triangle, styles.triangleDown]} />
        </Animated.View>
      </View>
    );
  },
});

module.exports = DefaultTabBar;
