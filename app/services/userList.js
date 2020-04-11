import fetch from './../utils/request';
// import Socket from './../utils/socket';


export function GET_userList(payload = {}, token = '') {
  return fetch('GET', '/users', payload, {
    headers: {
      // eslint-disable-next-line no-useless-escape
      Authorization: token.replace(/\"/g, '')
    }
  });
}

// export function SOCKET_UserList(eventName = '') {
//   let respons = [];
//   Socket.on(eventName, function (data) {//Socket.on(事件名稱,function(data)) → 接受後端傳來的資料
//     respons = data;
//   });
//   return respons;
// }