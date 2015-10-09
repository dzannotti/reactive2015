import React from 'react-native';
import Parallax from 'react-native-parallax';
import reactMixin from 'react-mixin';
import { colors, device } from '../utils';
import Author from './author';
import Sponsors from './sponsors';
import StayInTouch from './stay-in-touch';
import Rethinking from './rethinking';

const {
  View,
  StyleSheet,
  ScrollView
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    width: device.width
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center'
  }});

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
        <Author/>
      </ScrollView>
    );
  }
}
