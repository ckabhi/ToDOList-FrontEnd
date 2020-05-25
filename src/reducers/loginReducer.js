const defaultState = {
  auth: {
    isSignUp: false,
    isLoggedIn: false,
    isPassword: false
  },
  activeUser: {}
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
      case 'LOG_IN': {
        const userObj = action.payload.userData;
        console.log("Login Reducer", userObj);
        return {...state, auth: {
            isLoggedIn: userObj.isLoggedIn,
            isSignUp: userObj.isSignUp,
            isPassword: userObj.isPassword
          },
          activeUser: {
            userObj
          }
        };
      }
      case 'LOG_OUT': {
        console.log('Logging Out');
        return {
          auth: {
            isSignUp: false,
            isLoggedIn: false,
            isPassword: false
          },
          activeUser: {}
        };
      }
    }
  return state;
}
