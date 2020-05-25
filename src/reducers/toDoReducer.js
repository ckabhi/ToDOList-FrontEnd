const defaultState = {
  listObj: []
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
      case 'TODO_LIST': {
        const list = action.payload.list;
        console.log('To do List reducer', list);
        return {
          listObj: list
        };
      }

    }
  return state;
}
