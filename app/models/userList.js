
import { GET_userList, /*SOCKET_UserList*/ } from './../services/userList';

export default {

  namespace: 'userList',

  state: {
    userList: [123]
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    *GET_UserList({ payload }, { call, put }) {  // eslint-disable-line
      //const data = yield call(GET_userList);
      //yield put({ type: 'set_user_list', payload: data });
      yield put({ type: 'set_user_list', payload: [456] });
    },
    *SOCKET_UserList({ payload, callback, loading, token }, { call, put }) {  // eslint-disable-line
      // const data = yield call(GET_userList, 'testEvent', payload, token);
      // console.log(call.toString());
      // console.log(put.toString());
      yield put({ type: 'set_user_list', payload: payload });
    },
  },

  reducers: {
    set_user_list(state, { payload }) {
      return { ...state, userList: payload };
    },
  },

};
