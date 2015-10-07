import React from 'react-native';

const { View, Text, StyleSheet, ScrollView } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class Info extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>RETHINKING WEB DEVELOPMENT</Text>
          <Text>REMOVE ACCIDENTAL COMPLEXITY FROM YOUR APPS</Text>
          <Text>
            Is MVC dead? Should the complete application state be stored in a single global variable?
            Can we have a database with full query support on the client? Is setState an antipattern?
            Should all the data be passed through props?
            Come to hear answers, to not only these questions, from creators of
            DataScript, Este, CycleJS, RxJS, Cerebral, Mobservable and Fluxible!
          </Text>
          <Text>BUILD TRULY REALTIME APPLICATIONS WITH EASE</Text>
          <Text>As the world moves towards a highly interactive web, HTTP is being replaced with WebSockets and realtime communication is becoming a standard. We need a new solution that will embrace the realtime nature of the new generation of Web.
  Listen to the thoughts of the creators of Falcor, GraphQL, Firebase, Dato or swarm.js!</Text>
          <Text>LEARN ONCE, WRITE ANYWHERE</Text>
          <Text>React is not only a DOM library anymore. Mobile developers are building iOS (and Android soon too) apps using React Native, desktop applications are being built with React on Electron and even D3 can be used with React.
  Learn how React ecosystem evolves and grows beyond the web platform with talks from people behind React Native Playground, Este Native, Electron!</Text>
          <Text>LEVERAGE THE EXPANDING REACT ECOSYSTEM</Text>
          <Text>t seems that a lot of great expansions to react have surfaced lately. They touch on topics as form validations, css handling, routing and multi language support or even bootstrap component sets.
  We set up to bring you the creators of some of the finest expansions out there, such as CSS Modules and React Form Validation.</Text>
          <View/>
          <Text>And a ton of more!</Text>
        </View>
        <View>
          <Text>STAY IN TOUCH WITH US!</Text>
          <View/>
        </View>
        <View>
          <Text>OUR SPONSORS</Text>
          <View/>
          <Text>Thanks to our sponsors who made this great event possible.</Text>
        </View>
        <View>
          <Text>Made with &hearts; by Daniele Zannotti</Text>
          <Text>github/twitter/linkedin</Text>
        </View>
      </ScrollView>
    );
  }
}
