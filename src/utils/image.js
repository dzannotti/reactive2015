import React from 'react-native';

const {
  Image,
  View,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  }
});

export default class OverlayImage extends React.Component {
  render() {
    return (
      <Image {...this.props}>
        <View style={styles.overlay}>
          {this.props.children}
        </View>
      </Image>
    );
  }
}
