interface userInfo {
  password: string;
  username: string;
}

export var userData = userDataExtraction();

//Load the inital user database.
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

  //Returns a map loaded with the userdata.
  return user;
}

const UserData = () => {};

export default UserData;
