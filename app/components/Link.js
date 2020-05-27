import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  Linking 
} from 'react-native';

class Link extends Component {
  state = {
  }

  render() {
      const { props }=this;
      const { children, href, navigation } = props;
      const style = { ...styles.hyperLink, ...( props.style || {} )};
      const { onPress } = props;
      const press = (...params) => {
        (onPress || (()=>{}))(params);
        
        //Linking.openURL(href);
      };
      const params = {
        ...props,
        style,
        onPress:press
      };
      return (
        <Text {...params}>
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

export default Link;
