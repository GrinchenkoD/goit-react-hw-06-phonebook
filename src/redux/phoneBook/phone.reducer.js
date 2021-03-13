import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addFilter, addPhone, deletePhone } from "./phone.action";
import { ADD_CONTACT, FILTER_CONTACTS, REMOVE_CONTACT } from "./phone.constants";


const initialState = {
 
    items: [],
    filter: ''

}


const itemsReducer = createReducer(initialState.items, {
  [addPhone.type]: (state, action) => [...state, action.payload],
  [deletePhone]: (state, action) => [...state.filter((item) => item.id !== action.payload)]
});


const filterReducer = createReducer(initialState.filter, {
  [addFilter.type]: (_, action)=>action.payload,
})

// const phoneReducer = (state = initialState, action) => {
  
//   switch (action.type) {
//     case ADD_CONTACT:
//       return {...state ,items: [...state.items , action.payload]};
    
//     case REMOVE_CONTACT:
//       return {...state, items: [...state.items.filter((item) => item.id !== action.payload)] };
    
//     case FILTER_CONTACTS:
//       return{...state, filter: action.payload}
  
//     default:
//       return state
//   }
 
// }
const phoneReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  
})
export default phoneReducer