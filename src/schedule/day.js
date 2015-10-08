import React from 'react-native';
import Day from './day';
import Single from './single';

const {
  ScrollView,
  StyleSheet
} = React;

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
        <Single type="rethinking"/>
        <Single type="dataflow"/>
        <Single type="react"/>
        <Single type="general"/>
      </ScrollView>
    );
  }
}
