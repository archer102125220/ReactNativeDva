import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Socket from './../utils/socket';
import GlobalLayout from './../layouts/GlobalLayout';



const mapStateToProps = (state) => ({
  users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
  SOCKET_UserList: (payload, callback, loading) => dispatch({ type: 'userList/SOCKET_UserList', payload, callback, loading }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  class LayoutSwitch extends Component {

    componentDidMount = () => {
      const { SOCKET_UserList } = this.props;

      const socketEvents = [
        { name: 'testEvent', event: SOCKET_UserList },
        { name: 'clickEvent', event: (clickEvent) => console.log({ clickEvent }) }
      ];
      Socket.eventInit(socketEvents);
    }

    render() {
      const { props } = this;
      const { children, route/*, history*/ } = props;
      const { name } = route;
      console.log({ name });
      // const { location } = history;
      // const { pathname } = location;
      return (
        <GlobalLayout {...props}>
          {children}
        </GlobalLayout>
      );
    }
    static propTypes = {
      children: PropTypes.any,
      history: PropTypes.any,
      SOCKET_UserList: PropTypes.func,
    };
  }
);
