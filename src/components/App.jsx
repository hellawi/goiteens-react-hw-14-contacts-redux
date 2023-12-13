import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactsList from "./ContactsList/ContactsList";
import Input from "./Input/Input";
import { Typography } from "@mui/material";

function initializationContacts(){
  const contacts = localStorage.getItem('contacts')
  if(contacts){
    return JSON.parse(contacts)
  } else{
    return [];
  }
}

function App() {
  const [contacts, setContacts] = useState(initializationContacts);
  const [query, setQuery] = useState("");
  useEffect(() => {
    // getContactsService().then((data) => setContacts(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  function addContact(name, number, org, email) {
    const existContact = contacts.find((contact) => contact.name === name)
    if(existContact){
      alert('This contact is already exists!')
      return
    }
    postContactService(name, number, org, email).then((newContact) => {
      setContacts((prevContacts) => [newContact, ...prevContacts]);
    })
    // const newContact = {
    //   id: nanoid(),
    //   name,
    //   number,
    //   org,
    //   email
    // };
    
  }

  function removeContact(id){
    deleteContactService(id).then(() => {
      setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id))
    })
  }

  const filteredContacts = contacts.filter((contact) => {
    if (contact.name.includes(query)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <div className="asidenav">
        <div className="logo">
          <img src="/favicon.png" alt="" className="favicon" />
          <h1 className="title">Phonebook</h1>
        </div>
        <ContactForm onCreate={addContact} />
      </div>
      <div className="main">
        <Input value={query} onChange={(event) => setQuery(event.target.value)} />
        <ContactsList contacts={filteredContacts} onDelete={removeContact} />
        <div className="typography">
          <Typography variant="h6" sx={{color: "gray"}}>{contacts.length} contacts available</Typography>
        </div>
      </div>
    </div>
  );
}
export default App;
