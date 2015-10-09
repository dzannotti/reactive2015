import React from 'react-native';
import Parallax from 'react-native-parallax';
import { Icon } from 'react-native-icons';
import { Text, Link, device, colors } from '../utils';

const {
  View,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    height: 200,
    width: device.width,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 18,
    marginTop: 40,
    marginBottom: 20,
    color: '#ffffff'
  },
  links: {
    height: 30,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10
  }
});

export default class StayInTouch extends React.Component {
  render() {
    return (
      <Parallax.Image
        overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.0)'}}
        style={styles.container}
        scrollY={this.props.scrollY}
        source={{ uri: 'https://reactive2015.com/assets/img/backgrounds/bg-input.jpg' }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>STAY IN TOUCH WITH US!</Text>
          <View style={styles.links}>
            <Link source={{ uri: 'http://twitter.com/ReactiveConf' }}>
              <Icon name="ion|social-twitter" size={30} color="#cdcdcd" style={styles.icon} />
            </Link>
            <Link source={{ uri: 'http://www.facebook.com/ReactiveConf/timeline/' }}>
              <Icon name="ion|social-facebook" size={30} color="#cdcdcd" style={styles.icon} />
            </Link>
            <Link source={{ uri: 'http://www.facebook.com/events/135898716752704/' }}>
              <Icon name="ion|calendar" size={30} color="#cdcdcd" style={styles.icon} />
            </Link>
          </View>
        </View>
      </Parallax.Image>
    );
  }
}
