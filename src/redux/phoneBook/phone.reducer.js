import { ADD_CONTACT, FILTER_CONTACTS, REMOVE_CONTACT } from "./phone.constants";


const initialState = {
  contacts: {
    items: [],
    filter: ''
  }
}


const phoneReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_CONTACT:
      return { contacts: {...state.contacts ,items: [...state.contacts.items , action.payload]}};
    
    case FILTER_CONTACTS:
      return { contacts: {...state.contacts, items: [...state.contacts.items.filter((item) => item.id !== action.payload)] } };
    
    case REMOVE_CONTACT:
      return{ contacts:{...state.contacts, filter: action.payload}}
  
    default:
      return state
  }
 
}
export default phoneReducer