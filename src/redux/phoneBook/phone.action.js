import { v4 as uuid } from "uuid"

const addPhone = (phone) => {
    return {
        type: "phoneBook/addPhone",
        payload: {
            ...phone,
            id:uuid()
        }
    }
}

const deletePhone = (id) => {
    return {
        type: "phoneBook/deletePhone",
        payload: id
    }
}

const addFilter = (filter) => {
    return {
        type: "phoneBook/addFilter",
        payload: filter
    }
}

export {addPhone, deletePhone, addFilter }