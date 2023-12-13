import { useState } from "react";
import styles from "./ContactForm.module.css";
import { Button, TextField } from "@mui/material";

function ContactForm({ onCreate }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    setName("");
    setNumber("");
    setOrg("");
    setEmail("");
    onCreate(name, number, org, email);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{display: "block", marginBottom: 1, marginLeft: 1, marginRight: 1}}
          className={styles.inputName}
          type="text"
          name="name"
          label="Name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
        sx={{marginBottom: 1, marginLeft: 1, marginRight: 1}}
        className={styles.inputName}
        type="tel"
        name="number"
        label="Phone number"
        required
        value={number}
        onChange={(event) => setNumber(event.target.value)} />

        <TextField
        sx={{display: "block", marginBottom: 1, marginLeft: 1, marginRight: 1}}
        type="text"
        name="org"
        label="Organization"
        value={org}
        onChange={(event) => setOrg(event.target.value)}
        />

        <TextField
        sx={{marginBottom: 1, marginLeft: 1, marginRight: 1, }}
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />

        <Button type="submit" variant="contained" sx={{margin: 6}}>Add</Button>
      </form>
    </div>
  );
}
export default ContactForm;
