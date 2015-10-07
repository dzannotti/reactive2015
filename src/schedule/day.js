import React from 'react-native';
import Day from './day';
import Single from './single';

const { ScrollView, Text, StyleSheet } = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class Info extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Single/>
        <Single/>
        <Single/>
        <Single/>
      </ScrollView>
    );
  }
}
