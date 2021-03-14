import React from 'react'
import { connect } from 'react-redux'
import { deletePhone } from "../../redux/phoneBook/phone.action"
import styles from "./ContactList.module.css"

const ContactList = ({ contacts, filter, deletePhone }) => {


    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

    const handleDelete = (event) => {
        const { id } = event.target.closest("[data-id]").dataset;

        deletePhone(id)
    }
    return (

        <>
            {!contacts.length ? <h2 className={styles.noContacts}>There are no added contacts yet</h2> :
                <ul className={styles.list}>
                    {/* {contacts && contacts.map((contact) => (
                <li key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                </li>
            ))} */}
                    {filteredContacts.map((contact) => (
                        <li key={contact.id} data-id={contact.id} className={styles.item}>
                            <p className={styles.text}>{contact.name}</p>
                            <p className={styles.text}>{contact.phone}</p>
                            <button type="button" onClick={handleDelete} className={styles.deleteBtn}>Delete</button>
                        </li>
                    ))}
                </ul>
            }
        </>

    )
}



const mapStateToProps = (state) => {
    return ({
        contacts: state.contacts.items,
        filter: state.contacts.filter
    })
}
const mapDispatchToProps = { deletePhone }

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
