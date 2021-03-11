import React from 'react'
import { connect } from 'react-redux'
import { addFilter } from "../../redux/phoneBook/phone.action"

import styles from "./ContactFilter.module.css"

const ContactFilter = ({ addFilter, filter }) => {

    return (
        <div>
            <label htmlFor='search' className={styles.label} >Find contacts by name</label>
            <input id="search" type="text" className={styles.input} name="search" value={filter}
                onChange={(event) => { addFilter(event.target.value) }} placeholder="Name*" />
        </div>
    )

}

const mapDispatchToProps = { addFilter }
const mapStateToProps = (state) => ({
    filter: state.contacts.filter
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter)
