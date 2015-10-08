import React from 'react-native';
import Parallax from 'react-native-parallax';
import reactMixin from 'react-mixin';
import Speaker from './speaker';

const {
  ScrollView,
  View
} = React;

@reactMixin.decorate(Parallax.Mixin)
export default class Spakers extends React.Component {
  render() {
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
  }
}
