import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneReducer from "./phoneBook/phone.reducer";



const store = createStore(phoneReducer, composeWithDevTools());

export default store