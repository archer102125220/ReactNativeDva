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
      const { props }=this;
      const { children,href } = props;
      const style = { ...styles.hyperLink, ...( props.style || {} )};
      const { onPress } = props;
      const press = (...params) => {
        (onPress || (()=>{}))(params);
        Linking.openURL(href);
      };
      const params = {
        ...props,
        onPress:press
      };
      return (
        <Text style={style} {...params}>
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
