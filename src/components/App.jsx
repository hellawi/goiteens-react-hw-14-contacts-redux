import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactsList from "./ContactsList/ContactsList";
import Input from "./Input/Input";
import { Typography } from "@mui/material";
import { selectContacts, selectFilteredContacts } from "../redux/contacts/contactsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { addContactAction, removeContactAction } from "../redux/contacts/contactsActions";
import { nanoid } from "nanoid";

function App() {
  const contacts = useSelector(selectContacts);
  const [query, setQuery] = useState("");
  const filteredcontacts = useSelector(selectFilteredContacts)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  function addContact(name, number, org, email) {
    const existContact = contacts.find((contact) => contact.name === name)
    if(existContact){
      alert('This contact is already exists!')
      return
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
      org,
      email
    };
    dispatch(addContactAction(newContact))
  }

  function removeContact(id){
    dispatch(removeContactAction(id))
  }

  // const filteredContacts = contacts.filter((contact) => contact.text.includes(query))

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
