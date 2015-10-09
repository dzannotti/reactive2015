import React from 'react-native';
import { Image as PImage } from 'react-native-parallax';
import { Icon } from 'react-native-icons';
import ScrollableTabView from '../../react-native-scrollable-tab-view';
import TabBar from './tab-bar';
import { Link, device, Text, colors } from '../utils';

const {
  View,
  StyleSheet,
  ScrollView,
  Image
} = React;

const modalWidth = device.width - 80;

const styles = StyleSheet.create({
  listItem: {
    width: device.width / 2,
    height: 100
  },
  listItemOpen: {
    margin: 40,
    backgroundColor: colors.white,
    overflow: 'hidden'
  },
  speaker: {
    fontWeight: '400',
    position: 'absolute',
    top: 10,
    left: 18,
    fontSize: 20,
    color: colors.white
  },
  role: {
    color: colors.black,
    fontSize: 14,
    textAlign: 'center'
  },
  speakerCompany: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    fontSize: 16,
    color: colors.white
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
    width: device.width,
    height: 25,
    resizeMode: 'contain'
  },
  scrollContainer: {
    padding: 20,
    flex: 1,
    width: modalWidth,
    flexDirection: 'column'
  }
});

export default class SpeakerModal extends React.Component {
  renderOpen() {
    return (
      <View style={styles.listItemOpen}>
        <PImage
          style={{ width: modalWidth + 10, height: 100 }}
          parallaxFactor={0.3}
          scrollY={this.lastClosedScrollY}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
          resizeMode="cover"
          source={{ uri: 'https://reactive2015.com/assets/img/team/christian_alfoni.jpg' }}
        >
          <Text style={styles.speaker}>François De Campredon</Text>
        </PImage>
        <View style={{ width: modalWidth }}>
          <ScrollableTabView topBar renderTabBar={() => <TabBar />}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <Text style={{ color: colors.black }}>Works for Mozilla on the Firefox Developer Tools, mostly trying to make debugging JavaScript better. He's spent the last 8 years studying programming languages like Lisp and Scheme, and trying to bring various ideas to JavaScript. He likes to write in-depth articles about interesting programming ideas. Most of his free time is now happily dedicated to his daughter.</Text>
              <View style={styles.links}>
                <Link source={{ uri: 'http://twitter.com/ReactiveConf' }}>
                  <Icon name="ion|social-twitter" size={30} color={colors.black} style={styles.linksIcon} />
                </Link>
                <Link source={{ uri: 'http://www.facebook.com/ReactiveConf/timeline/' }}>
                  <Icon name="ion|social-facebook" size={30} color={colors.black} style={styles.linksIcon} />
                </Link>
                <Link source={{ uri: 'http://www.facebook.com/events/135898716752704/' }}>
                  <Icon name="ion|ios-world-outline" size={30} color={colors.black} style={styles.linksIcon} />
                </Link>
              </View>
            </ScrollView>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
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
    lastClosedScrollY = this.props.scrollY;
    return (
      <View style={styles.listItem}>
        <PImage
          style={{ height: 100 }}
          parallaxFactor={0.3}
          scrollY={this.props.scrollY}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
          resizeMode="cover"
          source={{ uri: 'https://reactive2015.com/assets/img/team/christian_alfoni.jpg' }}
        >
          <Text style={styles.speaker}>François De Campredon</Text>
          <Text style={styles.speakerCompany}>Cerebral</Text>
        </PImage>
      </View>
    );
  }
}
