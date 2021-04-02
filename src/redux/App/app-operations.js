import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './app-actions';

axios.defaults.baseURL = 'http://localhost:4040/contacts';

// Асинхронный вариант!
export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const response = await axios.get(`/`);
    dispatch(fetchContactSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

//   axios
//     .get(`/`)
//     .then(response => dispatch(fetchContactSuccess(response.data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());
  axios
    .post(`/`, contact)
    .then(response => dispatch(addContactSuccess(response.data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
