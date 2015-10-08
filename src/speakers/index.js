import React from 'react-native';
import Speaker from './single';

const { ScrollView, View, Text } = React;

var Parallax = require('react-native-parallax');

export default React.createClass({
  mixins: [Parallax.Mixin],

  render: function() {
    return (
      <ScrollView
        scrollEventThrottle={16}
        onScroll={this.onParallaxScroll}
        automaticallyAdjustContentInsets={false}
      >
        <View style={{ flexDirection: 'row', flex: 1, height: 100}}>
          <Speaker scrollY={this.state.parallaxScrollY} left={true}/>
          <Speaker scrollY={this.state.parallaxScrollY}/>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, height: 100}}>
          <Speaker scrollY={this.state.parallaxScrollY} left={true}/>
          <Speaker scrollY={this.state.parallaxScrollY}/>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, height: 100}}>
          <Speaker scrollY={this.state.parallaxScrollY} left={true}/>
          <Speaker scrollY={this.state.parallaxScrollY}/>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, height: 100}}>
          <Speaker scrollY={this.state.parallaxScrollY} left={true}/>
          <Speaker scrollY={this.state.parallaxScrollY}/>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, height: 100}}>
          <Speaker scrollY={this.state.parallaxScrollY} left={true}/>
          <Speaker scrollY={this.state.parallaxScrollY}/>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, height: 100}}>
          <Speaker scrollY={this.state.parallaxScrollY} left={true}/>
          <Speaker scrollY={this.state.parallaxScrollY}/>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, height: 100}}>
          <Speaker scrollY={this.state.parallaxScrollY} left={true}/>
          <Speaker scrollY={this.state.parallaxScrollY}/>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, height: 100}}>
          <Speaker scrollY={this.state.parallaxScrollY} left={true}/>
          <Speaker scrollY={this.state.parallaxScrollY}/>
        </View>
      </ScrollView>
    );
  },
});
