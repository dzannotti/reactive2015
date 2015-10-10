import React from 'react-native';
import Spin from 'react-native-spinkit';
import { Text, colors } from './utils';

const {
  View,
  StyleSheet,
  Image
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue
  },
  logo: {
    width: 200,
    height: 70,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 14,
    marginTop: 30,
    color: colors.white
  },
  spin: {
    marginTop: 20
  }
});

export default class Loader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: 'https://reactive2015.com/assets/img/logo.png'}}/>
        <Spin color={colors.green} type="Wave" size={50} style={styles.spin}/>
        <Text style={styles.text}>Applying some Relay powered magic</Text>
      </View>
    );
  }
}
