import React from 'react-native';

const {
  MapView,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class Map extends React.Component {
  render() {
    const venue = {
      latitude: 48.152,
      longitude: 17.116,
      latitudeDelta: 0,
      longitudeDelta: 0
    };
    return (
      <MapView
        pitchEnabled
        showsUserLocation
        style={styles.container}
        region={venue}
        annotations={[venue]}/>
    );
  }
}
