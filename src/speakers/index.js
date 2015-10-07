import React from 'react-native';
import Speaker from './single';

const { ScrollView, Text } = React;

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
        <Speaker scrollY={this.state.parallaxScrollY}/>
        <Speaker scrollY={this.state.parallaxScrollY}/>
        <Speaker scrollY={this.state.parallaxScrollY}/>
        <Speaker scrollY={this.state.parallaxScrollY}/>
        <Speaker scrollY={this.state.parallaxScrollY}/>
        <Speaker scrollY={this.state.parallaxScrollY}/>
        <Speaker scrollY={this.state.parallaxScrollY}/>
        <Speaker scrollY={this.state.parallaxScrollY}/>
      </ScrollView>
    );
  },
});
