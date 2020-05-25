export function userLogin(userData) {
  console.log("Login Action", userData);
  return {
    type: 'LOG_IN',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      userData
    }
  }
}

export function userLogout() {
  return {
    type: 'LOG_OUT'
  }
}

export function toDoList(list) {
  console.log("Action", list);
  return {
    type: 'TODO_LIST',
    payload: {
      list
    }
  }
}
