import React from 'react-native';

const {
  Text,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Raleway'
  }
});

export default class FontedText extends React.Component {
  render() {
    const { style, ...props } = this.props;
    return (
      <Text style={[styles.font, this.props.style]} {...props}>
        {this.props.children}
      </Text>
    );
  }
}
