import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  Linking 
} from 'react-native';

class HyperLink extends Component {
  state = {
  }

  render() {
      const {props}=this;
      const { children,href } = props;
      const style={ ...styles, ...( props.style || {} )};

      return (
        <Text style={style.hyperLink} onPress={() => Linking.openURL(href)} {...props}>
          {children}
        </Text>);
  }

  static propTypes = {
      children: PropTypes.any,
      style: PropTypes.any,
      href:PropTypes.string
  }
}
const styles = StyleSheet.create({  
  hyperLink: {
      color: 'blue'
  },
});

export default HyperLink;
