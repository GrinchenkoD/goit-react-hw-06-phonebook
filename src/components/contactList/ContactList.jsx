import React from 'react'
import { connect } from 'react-redux'
import { deletePhone } from "../../redux/phoneBook/phone.action"

const ContactList = ({ contacts, filter }) => {


    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul>
            {/* {contacts && contacts.map((contact) => (
                <li key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                </li>
            ))} */}
            {filteredContacts.map((contact) => (
                <li key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                </li>
            ))}
        </ul>
    )
}



const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
    filter: state.contacts.filter
})

const mapDispatchToProps = { deletePhone }

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
