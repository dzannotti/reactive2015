import React from 'react-native';

const {
  Text,
  StyleSheet
} = React;

export default FontedText extends React.Component {
  render() {
    const { style, ...props } = this.props;
    return (
      <Text style={[styles.font, this.props]} {...props}>
        {this.props.children}
      </Text>
    );
  }
}
