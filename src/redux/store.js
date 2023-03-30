import { configureStore } from "@reduxjs/toolkit";
import undoable from 'redux-undo'

import userSlice from './user-slice'

const store = configureStore({
    reducer: {
        users: undoable(userSlice)
    },
  });
  
  export default store;