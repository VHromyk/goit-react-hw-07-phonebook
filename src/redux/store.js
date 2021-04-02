import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducer';

// const myMiddleware = store => next => action => {
//   console.log('Моя прослойка', action);
//   next(action);
// };

const middleWare = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleWare,
});

export default store;
