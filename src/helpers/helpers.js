export const checkContact = (contacts, name, status) => {
  if (status) {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }
};

export const getVisibleContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase();
  if (contacts) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  return [];
};
