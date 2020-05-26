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

      case 'TODO_LIST_ADD':
  
        return {
          ...state,
          listObj: state.listObj.concat(action.payload)
          
        }

      case 'TODO_LIST_UPDATE':
      
        return {
          ...state,
          listObj: state.listObj.map( list =>
            list.id === action.payload.id ? action.payload : list
          )
        } 
      case 'TODO_LIST_DELETE':
      
        return {
          ...state,
          listObj: state.listObj.filter( list => list.id !== action.payload)
        }

    }
  return state;
}
