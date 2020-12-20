interface userInfo {
  password: string;
  username: string;
}

export var userData = userDataExtraction();

function userDataExtraction() {
  const data = require('../data/users.json');
  var user = data.map(getSelectedUser);

  function getSelectedUser(item: userInfo) {
    var selectedUser = {
      password: item.password,
      username: item.username,
    };
    return selectedUser;
  }

  user = user.map((currElement: any, index: any) => {
    currElement.index = index;
    return currElement;
  });
  return user;
}

const UserData = () => {};

export default UserData;
