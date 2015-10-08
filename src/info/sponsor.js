import React from 'react-native';
import { device, Link } from '../utils';

const {
  StyleSheet,
  Image
} = React;

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    marginBottom: 10,
    width: device.width,
    resizeMode: 'contain'
  },
  gold: {
    height: 30
  },
  silver: {
    height: 25
  },
  bronze: {
    height: 20
  }
});

export default class Sponsor extends React.Component {
  render() {
    return (
      <Link source={{ uri: this.props.link }}>
        <Image style={[styles.image, styles[this.props.type]]} source={{ uri: this.props.image }} />
      </Link>
    );
  }
}
