import React from 'react'
import { connect } from 'react-redux'
import { deletePhone } from "../../redux/phoneBook/phone.action"

const ContactList = ({ contacts, filter, deletePhone }) => {


    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

    const handleDelete = (event) => {
        const { id } = event.target.closest("[data-id]").dataset;

        deletePhone(id)
    }
    return (
        <ul>
            {/* {contacts && contacts.map((contact) => (
                <li key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                </li>
            ))} */}
            {filteredContacts.map((contact) => (
                <li key={contact.id} data-id={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                    <button type="button" onClick={handleDelete}>Delete</button>
                </li>
            ))}
        </ul>
    )
}



const mapStateToProps = (state) => {
    console.log(state)
    return ({
        contacts: state.contacts.items,
        filter: state.contacts.filter
    })
}
const mapDispatchToProps = { deletePhone }

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
