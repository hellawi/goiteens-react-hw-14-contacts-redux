export const selectContacts = (state) => state.contacts.contacts;
export const selectQuery = (state) => state.contacts.query;

export const selectFilteredContacts = (state) =>
  selectContacts(state).filter((contact) =>
    contact.name.toLowerCase().includes(selectQuery(state).toLowerCase())
  );