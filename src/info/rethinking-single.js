import React from 'react-native';
import { Text, colors, device } from '../utils';

const {
  View,
  StyleSheet,
  Image
} = React;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginTop: 20,
    width: device.width, // let the image resize naturally based on height
    height: 30,
    resizeMode: 'contain'
  },
  imageTitle: {
    marginTop: 5,
    fontSize: 16,
    marginBottom: 10
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    textAlign: 'center',
    width: device.width
  },
  text: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 14,
    textAlign: 'center',
    width: device.width,
    color: colors.white
  }
});

export default class RethinkingSingle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.image }} style={styles.image}/>
        <Text style={[styles.imageTitle, { color: colors[this.props.titleColor]}]}>{this.props.imageTitle}</Text>
        <Text style={[styles.title, { color: colors[this.props.titleColor]}]}>{this.props.title}</Text>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}
