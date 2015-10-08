import React from 'react-native';
import { Icon } from 'react-native-icons';
import { Link } from '../utils';

const {
  StyleSheet,
  View,
  Text
} = React;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
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
})

export default class Author extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Made with &lt;love/&gt; by Daniele Zannotti</Text>
        <View style={styles.links}>
          <Link source={{ uri: 'http://github.com/dzannotti' }}>
            <Icon name='ion|social-github' size={30} color="#cdcdcd" style={styles.icon} />
          </Link>
          <Link source={{ uri: 'http://twitter.com/dzannotti' }}>
            <Icon name='ion|social-twitter' size={30} color="#cdcdcd" style={styles.icon} />
          </Link>
          <Link source={{ uri: 'http://uk.linkedin.com/pub/daniele-zannotti/50/2a0/a73' }}>
            <Icon name='ion|social-linkedin' size={30} color="#cdcdcd" style={styles.icon} />
          </Link>
        </View>
      </View>
    );
  }
}
