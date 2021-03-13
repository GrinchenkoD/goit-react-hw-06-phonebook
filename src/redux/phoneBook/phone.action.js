import { createAction} from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"
import { ADD_CONTACT, FILTER_CONTACTS, REMOVE_CONTACT } from "./phone.constants"



const addPhone = createAction(ADD_CONTACT, (contact) => {
    return {
        payload:{
        ...contact,
        id: uuid()}
    }
})

const deletePhone = createAction(REMOVE_CONTACT);

const addFilter =createAction(FILTER_CONTACTS)





// const addPhone = (phone) => {
//     return {
//         type: ADD_CONTACT,
//         payload: {
//             ...phone,
//             id:uuid()
//         }
//     }
// }

// const deletePhone = (id) => {
//     return {
//         type: REMOVE_CONTACT,
//         payload: id
//     }
// }

// const addFilter = (filter) => {
//     return {
//         type: FILTER_CONTACTS,
//         payload: filter
//     }
// }

export {addPhone, deletePhone, addFilter }