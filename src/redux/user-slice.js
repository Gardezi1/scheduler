import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial State
 */
const initialState = {
    x1: [],
    x2: [],
    x3: [],
    x4: [],
    x5: [],
    x6: [],
    x7: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /**
         * Add a user shift
         * @param {string} user 
         * @param {string} slot 
         * @param {string} time 
         */
        addUserShift: (state, action ) => {
            const {user, day, slot, shift} = action.payload
            const data = {
                ...state,
                [user]: [...state[user], `${day}-${shift}-${slot}`]
            }
            return data
        },
        /**
         * Remove user shift
         * @param {string} user 
         * @param {string} slot 
         * @param {string} time 
         */
        removeUserShift: (state, action) => {
            const {user, day, slot, shift} = action.payload
            const data = {
                ...state,
                [user]: [state[user].filter(shiftSlot => shiftSlot !==`${day}-${shift}-${slot}`)]
            }
            return data
        }
    }
})

export default userSlice.reducer;