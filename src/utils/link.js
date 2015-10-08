import React from 'react-native';

const {
  TouchableOpacity,
  LinkingIOS // TODO: remove this, breaks android builds
} = React;

export default class Link extends React.Component {
  render() {
    return (
      <TouchableOpacity {...this.props}
        onPress={() => LinkingIOS.openURL(this.props.source.uri)}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
