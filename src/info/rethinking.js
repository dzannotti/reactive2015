import React from 'react-native';
import { Text, colors, device } from '../utils';
import RethinkingSingle from './rethinking-single';

const {
  View,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    width: device.width
  },
  title: {
    marginTop: 35,
    fontWeight: '400',
    fontSize: 20,
    color: colors.white
  },
  more: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 14,
    color: colors.white
  }
});

export default class Rethinking extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>RETHINKING WEB DEVELOPMENT</Text>
        <RethinkingSingle
          image="https://reactive2015.com/assets/img/companies/flux-logo.png"
          imageTitle="Data Flow"
          titleColor="blue"
          title="REMOVE ACCIDENTAL COMPLEXITY FROM YOUR APPS"
        >
          Is MVC dead? Should the complete application state be stored in a single global variable?
          Can we have a database with full query support on the client? Is setState an antipattern?
          Should all the data be passed through props?
          Come to hear answers, to not only these questions, from creators of
          DataScript, Este, CycleJS, RxJS, Cerebral, Mobservable and Fluxible!
        </RethinkingSingle>
        <RethinkingSingle
          image="https://reactive2015.com/assets/img/companies/rest-logo.png"
          imageTitle="Rethinking REST"
          titleColor="purple"
          title="BUILD TRULY REALTIME APPLICATIONS WITH EASE"
        >
          As the world moves towards a highly interactive web, HTTP is being replaced with
          WebSockets and realtime communication is becoming a standard. We need a new solution that
          will embrace the realtime nature of the new generation of Web.
          Listen to the thoughts of the creators of Falcor, GraphQL, Firebase, Dato or swarm.js!
        </RethinkingSingle>
        <RethinkingSingle
          image="https://reactive2015.com/assets/img/companies/multiplatform-logo.png"
          imageTitle="Multiplatfrom React"
          titleColor="green"
          title="LEARN ONCE, WRITE ANYWHERE"
        >
          React is not only a DOM library anymore. Mobile developers are building iOS
          (and Android soon too) apps using React Native, desktop applications are being built with
          React on Electron and even D3 can be used with React.
          Learn how React ecosystem evolves and grows beyond the web platform with talks from
          people behind React Native Playground, Este Native, Electron!
        </RethinkingSingle>
        <RethinkingSingle
          image="https://reactive2015.com/assets/img/companies/react-logo.png"
          imageTitle="On React"
          titleColor="yellow"
          title="LEVERAGE THE EXPANDING REACT ECOSYSTEM"
        >
          It seems that a lot of great expansions to react have surfaced lately. They touch on
          topics as form validations, css handling, routing and multi language support or even
          bootstrap component sets.
          We set up to bring you the creators of some of the finest expansions out there, such as
          CSS Modules and React Form Validation.
        </RethinkingSingle>
        <Text style={styles.more}>And a ton more!</Text>
      </View>
    );
  }
}
