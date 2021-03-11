const initialState={
  contacts: {
    items: [],
    filter: ''
  }
}


const phoneReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "phoneBook/addPhone":
      return { contacts: {...state.contacts ,items: [...state.contacts.items , action.payload]}};
    
    case "phoneBook/addPhone":
      return { contacts: {...state.contacts, items: [...state.contacts.items.filter((item) => item.id !== action.payload)] } };
    
    case "phoneBook/addFilter":
      return{ contacts:{...state.contacts, filter: action.payload}}
  
    default:
      return state
  }
 
}
export default phoneReducer