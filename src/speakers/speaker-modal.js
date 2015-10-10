import React from 'react-native';
import { Icon } from 'react-native-icons';
import ScrollableTabView from '../../react-native-scrollable-tab-view';
import TabBar from './tab-bar';
import { Link, Text, Image as OImage, device, colors } from '../utils';

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
    left: 3,
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
    right: 10,
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
    height: 35,
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
  renderLink(type, uri) {
    if (typeof uri === 'undefined' || uri === '') {
      return false;
    }
    return (
      <Link source={{ uri }}>
        <Icon name={type} size={30} color={colors.black} style={styles.linksIcon} />
      </Link>
    );
  }


  renderOpen() {
    const { speaker } = this.props;
    return (
      <View style={styles.listItemOpen}>
        <OImage
          style={{ width: modalWidth + 10, height: 100 }}
          parallaxFactor={0.3}
          scrollY={this.lastClosedScrollY}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
          resizeMode="cover"
          source={{ uri: speaker.image }}
        >
          <Text style={styles.speaker}>{speaker.firstName} {speaker.lastName}</Text>
        </OImage>
        <View style={{ width: modalWidth }}>
          <ScrollableTabView topBar renderTabBar={() => <TabBar />}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <Text style={{ color: colors.black }}>{speaker.bio}</Text>
              <View style={styles.links}>
                {this.renderLink('ion|social-twitter', speaker.twitter)}
                {this.renderLink('ion|social-github', speaker.github)}
                {this.renderLink('ion|ios-world-outline', speaker.web)}
              </View>
            </ScrollView>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.links}>
                <Link source={{ uri: speaker.company.url }}>
                  <Image style={styles.companyLogo} source={{ uri: speaker.company.logo }} />
                </Link>
              </View>
              <View style={styles.links}>
                <Text style={styles.role}>{speaker.companyRole}</Text>
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
    const { speaker } = this.props;
    return (
      <View style={styles.listItem}>
        <OImage
          style={{ height: 100 }}
          parallaxFactor={0.3}
          scrollY={this.props.scrollY}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
          resizeMode="cover"
          source={{ uri: speaker.image }}
        >
          <Text style={styles.speaker}>{speaker.firstName} {speaker.lastName}</Text>
          <Text style={styles.speakerCompany}>{speaker.company.name}</Text>
        </OImage>
      </View>
    );
  }
}
