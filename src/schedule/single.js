import React from 'react-native';
import Accordion from 'react-native-accordion';
import { Icon } from 'react-native-icons';
import { Text, colors } from '../utils';

const {
  View,
  StyleSheet,
  Image
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  time: {
    color: colors.green
  },
  speaker: {
    marginTop: 8,
    fontWeight: '400',
    fontSize: 12,
    width: 105
  },
  talk: {
    fontSize: 13,
    flex: 1
  },
  sized: {
    height: 70
  },
  leftColumn: {
    paddingLeft: 10,
    paddingTop: 15,
    width: 105,
    flexDirection: 'column'
  },
  borderTopBig: {
    borderTopWidth: 4
  },
  borderTop: {
    borderBottomWidth: 0,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopColor: colors.grey
  },
  rightColumn: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 3,
    flex: 1,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  rightColumnExcerpt: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 3,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  avatar: {
    marginLeft: 20,
    width: 45,
    height: 45,
    borderRadius: 23
  },
  talkExcerpt: {
    marginBottom: 20,
    marginRight: 10,
    fontSize: 13
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  chevronContainer: {
    width: 25
  },
  chevron: {
    marginRight: 10,
    marginLeft: 5,
    height: 20,
    width: 20
  },
  rethinking: {
    borderTopWidth: 4,
    borderTopColor: colors.purple
  },
  dataflow: {
    borderTopWidth: 4,
    borderTopColor: colors.blue
  },
  react: {
    borderTopWidth: 4,
    borderTopColor: colors.green
  },
  general: {
    borderTopWidth: 4,
    borderTopColor: colors.yellow
  }
});

export default class Info extends React.Component {
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  time(val) {
    let minutes = (val - Math.floor(val / 100) * 100) + '';
    if (minutes.length === 1) {
      minutes = minutes + '0';
    }
    return Math.floor(val / 100) + ':' + minutes;
  }

  type(val) {
    const types = [
      'dataflow',
      'rethinking',
      'react',
      'general'
    ];
    if (val < 1 || val > 4 ) {
      return 'center';
    }
    return types[val - 1];
  }

  renderHeader() {
    const { event } = this.props;
    const hasExcerpt = event.excerpt !== null && typeof event.excerpt !== 'undefined' && event.excerpt !== '';
    const borderColor = event.type ? styles[this.type(event.type)] : {};
    return (
      <View style={styles.headerContainer}>
        <View style={[styles.leftColumn, styles.sized, styles.borderTop, styles.borderTopBig]}>
          <Text style={styles.time}>
            {this.time(event.startsAt)} - {this.time(event.endsAt)}
          </Text>
          <Text style={styles.speaker}>{event.speaker.firstName[0]}. {event.speaker.lastName}</Text>
        </View>
        <View style={[styles.rightColumn, styles.borderTop, borderColor]}>
          <Text style={styles.talk}>{this.capitalize(event.title.toLowerCase())}</Text>
        </View>
        { hasExcerpt &&
          <View style={[styles.borderTop, styles.sized, styles.center, styles.chevronContainer, borderColor]}>
            <Icon name="ion|ios-arrow-down" size={20} color={colors.grey} style={styles.chevron}/>
          </View>
        }
      </View>
    );
  }

  renderContent() {
    const { event } = this.props;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Image style={styles.avatar} source={{uri: event.speaker.image}} />
        </View>
        <View style={styles.rightColumnExcerpt}>
          <Text style={styles.talkExcerpt}>{event.excerpt}</Text>
        </View>
      </View>
    );
  }

  render() {
    if (this.props.event.excerpt === '') {
      return this.renderHeader();
    }
    return (
      <Accordion
        underlayColor="#f0f0f0"
        header={this.renderHeader()}
        content={this.renderContent()}
        easing="easeOutCubic"
      />
    );
  }
}
