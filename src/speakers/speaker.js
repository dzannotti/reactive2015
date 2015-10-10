import React from 'react-native';
import Lightbox from '../../react-native-lightbox';
import SpeakerModal from './speaker-modal';

const {
  View
} = React;

export default class Speaker extends React.Component {
  render() {
    return (
      <Lightbox activeProps={{ isOpen: true }}>
        { (props) => <View><SpeakerModal speaker={this.props.speaker} {...props}/></View> }
      </Lightbox>
    );
  }
}
