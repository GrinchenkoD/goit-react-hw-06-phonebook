// import { createStore } from "redux"
// import { composeWithDevTools } from 'redux-devtools-extension';
// import phoneReducer from "./phoneBook/phone.reducer";
import {configureStore} from "@reduxjs/toolkit"
import rootReduer from "./root.reducer";



// const store = createStore(phoneReducer, composeWithDevTools());

const store = configureStore({
    reducer: rootReduer
})

export default store