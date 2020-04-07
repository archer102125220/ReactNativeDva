import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { StyleSheet,ImageBackground,Text,View,FlatList  } from 'react-native';
import Socket from './../utils/socket';
import yay from '../assets/yay.jpg';
import A from './../components/A';

const styles =  StyleSheet.create({
  normal: {
    fontFamily: 'Georgia, sans-serif',
    marginTop: '0.1%',//'3em'
    textAlign: 'center',
  },
  title: {
    fontSize: 2.5,//'2.5rem'
    fontWeight: 'normal',
    letterSpacing: -1,//'-1px'
  },
  welcome: {
    height: 328,//'328px'
    width: 388,//'388px'
  },
  list: {
    fontSize: 1.2,//'1.2em'
    marginTop: '0.1%',//'1.8em'
    lineHeight: 1.5,//'1.5em'
  },
  code: {
      backgroundColor: '#f7f7f7',
    }
});

const mapStateToProps = (state) => ({
  users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
  GET_UserList: (payload, callback, loading) => dispatch({ type: 'userList/GET_UserList', payload, callback, loading }),
});


class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.normal}>
        <Text h1 style={styles.title}>Yay! Welcome to dva!</Text>
        <ImageBackground source={yay} style={styles.welcome}/>
        <FlatList style={styles.list}
          data={[
            { key:(<>To get started, edit <Text style={styles.code}>src/index.js</Text> and save to reload.</>) },
            { key:<A href='https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md'>Getting Started</A>}
          ]}
        />
      </View>
    );
  }
  static propTypes = {
    users: PropTypes.array,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
