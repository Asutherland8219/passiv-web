const auth = (state = [], action) => {
  if (action.type === 'LOGIN_STARTED') {
    return {
      loggedIn: false,
      loggingIn: true,
    };
  }
  else if (action.type === 'LOGIN_SUCCEEDED') {
    return {
      loggedIn: true,
      loggingIn: false,
    };
  } else if (action.type === 'LOGIN_FAILED') {
    return {
      loggedIn: false,
      loggingIn: false,
    };
  }
  return state;
};

export default auth;