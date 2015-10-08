import React from 'react-native';
import { Image as PImage } from 'react-native-parallax';
import ScrollableTabView from '../../react-native-scrollable-tab-view';
import TabBar from './tab-bar';
import { Icon } from 'react-native-icons';
import Link from '../link';

const {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} = React;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  listItem: {
    width: deviceWidth/2,
    height: 100,
    borderWidth: 0,
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#1bce7c',
  },
  leftItem: {
    borderLeftWidth: 1,
    borderLeftColor: '#1bce7c'
  },
  listItemOpen: {
    margin: 40,
    backgroundColor: '#ffffff',
    overflow: 'hidden'
  },
  speaker: {
    fontFamily: 'Raleway',
    fontWeight: '400',
    position: 'absolute',
    fontSize: 16,
    top: 10,
    left: 18,
    fontSize: 20,
    color: '#ffffff'
  },
  role: {
    fontFamily: 'Raleway',
    fontSize: 14,
    textAlign: 'center'
  },
  speakerCompany: {
    fontFamily: 'Raleway',
    fontSize: 14,
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 16,
    color: '#ffffff'
  },
  rowCentered: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  links: {
    height: 30,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linksIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10
  },
  companyLogo: {
    width: deviceWidth - 83,
    height: 25,
    resizeMode: 'contain'
  }
})

export default class SpeakerModal extends React.Component {
  renderOpen() {
    return (
      <View style={styles.listItemOpen}>
        <PImage
          style={{ width: deviceWidth -80, height: 100 }}
          scrollY={this.props.scrollY}
          overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.3)'}}
          resizeMode="cover"
          parallaxFactor={0.3}
          source={{ uri: 'https://reactive2015.com/assets/img/team/christian_alfoni.jpg' }}
        >
          <Text style={styles.speaker}>Sean Grove</Text>
          <Text style={styles.speakerCompany}>Glint</Text>
        </PImage>
        <View style={{ width: deviceWidth -83 }}>
          <ScrollableTabView topBar={true} renderTabBar={() => <TabBar />}>
            <ScrollView contentContainerStyle={{ padding: 20, flex: 1, width: deviceWidth -83, flexDirection: 'column' }}>
              <Text style={{ color: '#323232'}}>Works for Mozilla on the Firefox Developer Tools, mostly trying to make debugging JavaScript better. He's spent the last 8 years studying programming languages like Lisp and Scheme, and trying to bring various ideas to JavaScript. He likes to write in-depth articles about interesting programming ideas. Most of his free time is now happily dedicated to his daughter.</Text>
              <View style={styles.links}>
                <Link source={{ uri: 'http://twitter.com/ReactiveConf' }}>
                  <Icon name='ion|social-twitter' size={30} color="#323232" style={styles.linksIcon} />
                </Link>
                <Link source={{ uri: 'http://www.facebook.com/ReactiveConf/timeline/' }}>
                  <Icon name='ion|social-facebook' size={30} color="#323232" style={styles.linksIcon} />
                </Link>
                <Link source={{ uri: 'http://www.facebook.com/events/135898716752704/' }}>
                  <Icon name='ion|ios-world-outline' size={30} color="#323232" style={styles.linksIcon} />
                </Link>
              </View>
            </ScrollView>
            <ScrollView contentContainerStyle={{ padding: 20, flex: 1, width: deviceWidth -83, flexDirection: 'column' }}>
              <View style={styles.links}>
                <Link source={{ uri: 'http://www.facebook.com/ReactiveConf/timeline/' }}>
                  <Image style={styles.companyLogo} source={{ uri: 'https://reactive2015.com/assets/img/companies/mozilla_logo.png' }} />
                </Link>
              </View>
              <View style={styles.links}>
                <Text style={styles.role}>UX Engineer</Text>
              </View>
            </ScrollView>
          </ScrollableTabView>
        </View>
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
          <Text style={styles.speaker}>Sean Grove</Text>
          <Text style={styles.speakerCompany}>Glint</Text>
        </PImage>
      </View>
    );
  }
}
