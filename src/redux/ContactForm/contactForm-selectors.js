export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const filterContacts = state => {
  const filter = getFilter(state);
  const items = getContacts(state);
  const normalized = filter.toLowerCase();

  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalized),
  );
};
