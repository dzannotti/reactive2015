import React from 'react-native';
import Lightbox from '../../react-native-lightbox';
import { Image as PImage } from 'react-native-parallax';
const { View, Text } = React;
import Modal from './modal';

export default React.createClass({
  render: function() {
    return (
      <Lightbox activeProps={{ isOpen: true }}>
        { (props) => <View><Modal scrollY={this.props.scrollY} {...props}/></View> }
      </Lightbox>
    );
  },
});
