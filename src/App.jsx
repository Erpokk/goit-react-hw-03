import initialContacts from "./contacts.json"
import ContactList from './components/ContactList/ContactList.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'
import { useState } from "react"
import './App.css'

function App() {

  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState('')

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }
  
  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }

  const searchedContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts ={searchedContacts} onDelete={deleteContacts} />
    </div>
  )
}

export default App
