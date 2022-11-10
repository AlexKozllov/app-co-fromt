import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { mainReduser } from './reducers/mainReducer';

const rootReducer = combineReducers({
  search: mainReduser,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export { store };
