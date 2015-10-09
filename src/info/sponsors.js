import React from 'react-native';
import Sponsor from './sponsor';
import { Text, device, colors } from '../utils';

const {
  StyleSheet,
  View
} = React;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    marginBottom: 10
  },
  type: {
    marginTop: 15,
    fontSize: 14,
    marginBottom: 5
  },
  thanks: {
    textAlign: 'center',
    width: device.width,
    marginTop: 20,
    fontSize: 14,
    marginBottom: 10
  }
});

export default class Sponsors extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>OUR SPONSORS</Text>
        <Text style={styles.type}>GOLD SPONSORS</Text>
        <Sponsor
          type="gold"
          image="https://reactive2015.com/assets/img/sponsor/strv.png"
          uri="https://reactive2015.com/assets/img/sponsor/strv.png"
        />
        <Text style={styles.type}>SILVER SPONSORS</Text>
        <Text style={styles.type}>BRONZE SPONSORS</Text>
        <Text style={styles.type}>MEDIA PARTNERS</Text>
        <Text style={styles.thanks}>
            Thanks to our sponsors who made this great event possible.
        </Text>
      </View>
    );
  }
}
