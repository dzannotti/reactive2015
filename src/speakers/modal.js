import React from 'react-native';
import { Image as PImage } from 'react-native-parallax';
const {
  View,
  Text,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#1bce7c'
  },
  listItemOpen: {
    margin: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1bce7c'
  },
  textOverlay: {
    position: 'absolute',
    top: 10,
    left: 18,
    fontSize: 20,
    color: '#ffffff'
  },
  textOverlayCompany: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 16,
    color: '#ffffff'
  }
})

export default class SpeakerModal extends React.Component {
  renderOpen() {
    return (
      <View style={styles.listItemOpen}>
        <PImage
          style={{ height: 100, borderRadius: 6 }}
          scrollY={this.props.scrollY}
          overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.3)'}}
          resizeMode="cover"
          source={{ uri: 'https://reactive2015.com/assets/img/team/christian_alfoni.jpg' }}
        >
        </PImage>
        <Text style={styles.textOverlay}>Sean Grove</Text>
        <Text style={styles.textOverlayCompany}>Glint</Text>
      </View>
    );
  }
  render() {
    if (this.props.isOpen) {
      return this.renderOpen();
    }
    return (
      <View style={styles.listItem}>
        <PImage
          style={{ height: 100 }}
          scrollY={this.props.scrollY}
          overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.3)'}}
          resizeMode="cover"
          source={{ uri: 'https://reactive2015.com/assets/img/team/christian_alfoni.jpg' }}
        >
          <Text style={styles.textOverlay}>Sean Grove</Text>
          <Text style={styles.textOverlayCompany}>Glint</Text>
        </PImage>
      </View>
    );
  }
}
