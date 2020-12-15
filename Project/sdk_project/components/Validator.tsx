import {userData} from './UserData';

export const validateUsername = (input: string) => {
  // const re = /\S+@\S+\.\S+/;
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (!input || input.length <= 0) {
    return 'Email cannot be empty.';
  }
  if (!re.test(String(input).toLowerCase())) {
    return 'Enter a valid email address.';
  }
  return '';
};

export const validatePassword = (password: string) => {
  if (!password || password.length <= 0) {
    return 'Password cannot be empty.';
  } else if (password.length < 8 && password.length > 0) {
    return 'Minimum of 8 characters';
  }
  return '';
};

export const validateName = (name: string) => {
  if (!name || name.length <= 0) {
    return 'Name cannot be empty.';
  }
  return '';
};

var exists = false;

interface userInfo {
  [index: string]: {
    password: string;
    username: string;
  };
}

//To sign in
export const signIn = (enterUsername: string, enterPassword: string) => {
  const data: userInfo = userData;
  Object.keys(data).map(function (key) {
    var item = data[key];
    var selectedUser = {
      password: item.password,
      username: item.username,
    };

    if (
      enterUsername === selectedUser.username &&
      enterPassword === selectedUser.password
    ) {
      exists = true;
    }
  });

  if (exists) {
    exists = false;
    return true;
  } else {
    return false;
  }
};
