import React from 'react-native';
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
        {this.props.events.map((event, idx) => <Single key={idx} event={event}/>)}
      </ScrollView>
    );
  }
}
