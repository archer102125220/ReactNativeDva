import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { StyleSheet,Text,View,TextInput } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Button from './../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
});

const mapStateToProps = (state) => ({
  users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
  GET_UserList: (payload, callback, loading) => dispatch({ type: 'userList/GET_UserList', payload, callback, loading }),
});


class Login extends Component {
  constructor(props) {
    super(props);
  }

  //static navigationOptions = {
  //  title: 'Login',
  //}

  render() {
    const { navigation } = this.props;
    
    return (
      <View style={styles.container}>
        <Text>
          My first React Native app
        </Text>
        <Button onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'HomeNavigator',
              //params: {
              //  user: 'jane',
              //},
            })
          )
        }>
          進入主頁
        </Button>
      </View>
    );
  }
  static propTypes = {
    users: PropTypes.array,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);