import React from 'react-native';
const {
  View,
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
    const venue =  {
      latitude: 48.152,
      longitude: 17.116
    };
    return (
      <MapView
        pitchEnabled={true}
        showsUserLocation={true}
        style={styles.container}
        region={venue}
        annotations={[venue]}/>
    );
  }
}
