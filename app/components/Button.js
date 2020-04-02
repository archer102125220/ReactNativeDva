import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

class Button extends Component {
  state = {
  }

  render() {
      const {props}=this;
      const { children } = props;

      return (
        <TouchableOpacity style={styles.button} {...props}>
          <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>);
  }

  static propTypes = {
      children: PropTypes.any
  }
}
const styles = StyleSheet.create({  
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
