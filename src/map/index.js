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
  constructor(props) {
    super(props);
    const venue =  {
      latitude: 48.152,
      longitude: 17.116
    };
    this.state = {
      region: venue,
      annotations: [ venue ]
    };
  }
  render() {
    return (
      <MapView
        pitchEnabled={true}
        showsUserLocation={true}
        style={styles.container}
        region={this.state.mapRegion || undefined}
        annotations={this.state.annotations || undefined}/>
    );
  }
}
