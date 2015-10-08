import React from 'react-native';
import { Icon } from 'react-native-icons';
import Parallax from 'react-native-parallax';
import reactMixin from 'react-mixin';
import { Link, colors } from '../utils';
import Author from './author';
import Sponsors from './sponsors';
import StayInTouch from './stay-in-touch';
import Rethinking from './rethinking';

const {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} = React;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  separator: {
    width: 150,
    height: 2,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.green
  }
});

@reactMixin.decorate(Parallax.Mixin)
export default class Info extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.center}
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={16}
        onScroll={this.onParallaxScroll}
      >
        <Rethinking/>
        <StayInTouch scrollY={this.state.parallaxScrollY}/>
        <Sponsors/>
        <View style={styles.separator}/>
        <Author/>
      </ScrollView>
    );
  }
}
