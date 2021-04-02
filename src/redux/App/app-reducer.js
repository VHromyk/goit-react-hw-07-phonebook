import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
} from './app-actions';

// const addContact = createAction(types.ADD_CONTACT);
// const deleteContact = createAction(types.DELETE_CONTACT);

// const items = (state = itemsInitionalState, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [payload, ...state];

//     case types.DELETE_CONTACT:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//   }

//   return state;
// };

const items = createReducer([], {
  [addContactSuccess]: (state, action) => [action.payload, ...state],
  [deleteContactSuccess]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
