import React from 'react-native';

const {
  TouchableOpacity,
  LinkingIOS // remove me, i break android builds
} = React;

export default class Link extends React.Component {
  render() {
    return (
      <TouchableOpacity {...this.props}
        onPress={() => {
          if (this.props.source && this.props.source.uri) {
            let url = this.props.source.uri;
            LinkingIOS.openURL(url);
          }
        }}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }

}
