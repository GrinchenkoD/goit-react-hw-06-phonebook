import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPhone } from "../../redux/phoneBook/phone.action"

import styles from "./ContactForm.module.css"

const InitialState = {
    name: "",
    phone: ""
}

class ContactForm extends Component {
    state = {
        ...InitialState
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value })

    }
    handleSubmit = (event) => {
        event.preventDefault()

        if (this.props.contacts.some((contact) => contact.name === this.state.name)) {
            alert(`${this.state.name} is already exist`);
            return
        }
        this.props.addPhone(this.state)
        this.setState({ ...InitialState })
    }


    render() {
        const { name, phone } = this.state
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Phonebook</h2>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <label htmlFor="name" className={styles.label} >Name</label>
                    <input id="name" type="text" name="name" value={name} onChange={this.handleChange}
                        placeholder="Name*" required className={styles.input} />

                    <label htmlFor="phone" className={styles.label}>Number</label>
                    <input id="phone" type="tel" name="phone" value={phone} onChange={this.handleChange}
                        placeholder="Phone number*" required className={styles.input} />

                    <button
                        type="submit"
                        className={styles.submitBtn}
                    >
                        Add contact
                </button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    contacts: state.contacts.items
})

const mapDispatchToProps = { addPhone }

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
