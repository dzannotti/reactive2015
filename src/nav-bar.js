import React from 'react-native';
import { colors } from './utils';

const {
  StyleSheet,
  View,
  Image
} = React;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    height: 64,
    margin: 0,
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.green
  },
  logo: {
    marginTop: 10,
    width: 150,
    height: 30,
    resizeMode: 'contain'
  }
})

export default class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: 'https://reactive2015.com/assets/img/logo.png'}}/>
      </View>
    );
  }
}
