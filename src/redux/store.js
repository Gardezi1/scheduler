import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import undoable from 'redux-undo'
import thunk from 'redux-thunk';

import userSlice from './user-slice'

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, undoable(userSlice))


export const store = configureStore({
    reducer: {
        users: persistedReducer
    },
  });
  
  export const persistor =  persistStore(store);