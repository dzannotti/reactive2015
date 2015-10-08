import React from 'react-native';
import Accordion from 'react-native-accordion';
import { Icon } from 'react-native-icons';
const { View, Text, StyleSheet, Image } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  time: {
    color: '#1bce7c',
    fontFamily: 'Raleway'
  },
  speaker: {
    marginTop: 8,
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontSize: 12,
    width: 105
  },
  talk: {
    fontFamily: 'Raleway',
    fontSize: 13
  },
  sized: {
    height: 70,
  },
  leftColumn: {
    paddingLeft: 10,
    paddingTop: 15,
    width: 105,
    flexDirection: 'column',
  },
  borderTopBig: {
    borderTopWidth: 4,
  },
  borderTop: {
    borderBottomWidth: 0,
    borderTopWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopColor: '#cdcdcd'
  },
  rightColumn: {
    paddingLeft: 10,
    paddingTop: 15,
    flex: 1,
    flexDirection: 'column'
  },
  avatar: {
    marginLeft: 20,
    width: 45,
    height: 45,
    borderRadius: 23
  },
  talkExcerpt : {
    fontFamily: 'Raleway',
    marginBottom: 20,
    marginRight: 10,
    fontSize: 13
  },
  rethinkingRest: {
    borderTopColor: '#9a58b6'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  chevronContainer: {
    width: 25
  }
});

export default class Info extends React.Component {
  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={[styles.leftColumn, styles.sized, styles.borderTop, styles.borderTopBig]}>
          <Text style={styles.time}>8:00 - 9:00</Text>
          <Text style={styles.speaker}>R. Tirumalareddy</Text>
        </View>
        <View style={[styles.rightColumn, styles.sized, styles.borderTop, styles.borderTopBig, styles.rethinkingRest]}>
          <Text style={styles.talk}>FUNCTIONAL PROGRAMMING IN JAVASCRIPT. WHAT, WHY, AND HOW.</Text>
        </View>
        <View style={[styles.borderTopBig, styles.rethinkingRest, styles.sized, styles.center, styles.chevronContainer]}>
          <Icon name="ion|chevron-down" size={20} color="#cdcdcd" style={{ marginRight: 10, marginLeft: 5, height: 20, width: 20 }}/>
        </View>
      </View>
    );
  }

  renderContent() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Image style={styles.avatar} source={{uri: 'https://reactive2015.com/assets/img/team/daniel_steigerwald.jpg'}} />
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.talkExcerpt}>As programs get bigger, they also become more complex and harder to understand. We all think ourselves pretty clever, of course, but we are mere human beings, and even a moderate amount of chaos tends to baffle us. And then it all goes downhill. Working on something you do not really understand is a bit like cutting random wires on those time-activated bombs they always have in movies. If you are lucky, you might get the right one ― especially if you are the hero of the movie and strike a suitably dramatic pose ― but there is always the possibility of blowing everything up.</Text>
        </View>
      </View>
    );
  }

  render() {
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
