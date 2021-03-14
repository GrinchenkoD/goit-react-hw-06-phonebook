import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import ContactFilter from "./contactsFilter/ContactFilter";

import styles from "./App.module.css"


function App() {
  return (
      <div className={styles.thumb}>
      <ContactForm />
      <ContactFilter/>
      <ContactList />
      </div>
  );
}

export default App;
