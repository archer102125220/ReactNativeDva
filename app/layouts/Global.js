import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { StyleSheet, ImageBackground, Text, View, FlatList, SectionList } from 'react-native';

const mapStateToProps = (state) => ({
  users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
  SOCKET_UserList: (payload, callback, loading) => dispatch({ type: 'userList/SOCKET_UserList', payload, callback, loading }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  class GlobalLayout extends Component {
    state = {
    }

    render() {
      const { children } = this.props;

      return (<View>
        <Text>
          {children}
        </Text>
      </View>);
    }

    static propTypes = {
      children: PropTypes.any
    }
  }
);
