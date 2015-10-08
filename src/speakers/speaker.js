import React from 'react-native';
import Lightbox from '../../react-native-lightbox';
import { Image as PImage } from 'react-native-parallax';
import SpeakerModal from './speaker-modal';

const {
  View
} = React;

export default class Speaker extends React.Component {
  render() {
    return (
      <Lightbox activeProps={{ isOpen: true }}>
        { (props) => <View><SpeakerModal scrollY={this.props.scrollY} {...props}/></View> }
      </Lightbox>
    );
  }
}
