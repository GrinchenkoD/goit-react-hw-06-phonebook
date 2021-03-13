import { combineReducers } from "redux"
import phoneReducer from "./phoneBook/phone.reducer"


const rootReduer = combineReducers({
    contacts: phoneReducer,
    auth: () => ({
        isAuth: true
    })
})

export default rootReduer