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
         * @param {*} state
         * @param {*} action
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
         * @param {*} state
         * @param {*} action
         */
        removeUserShift: (state, action) => {
            const {user, day, slot, shift} = action.payload
            let foundUser = user
            let data = null
            if (user  === "") {
                foundUser = Object.keys(state).find(user => state[user].includes(`${day}-${shift}-${slot}`))
            } 
            data = {
                ...state,
                [foundUser]: [...state[foundUser].filter(shiftSlot => shiftSlot !==`${day}-${shift}-${slot}`)]
            }
            
            return data
        },
        /**
         * if we are replacing a user then remove the old one and add
         * a new one 
         * @param {*} state 
         * @param {*} action 
         */
        removeAndAddUserShift: (state, action) => {
            const {user, previousUser, day, slot, shift} = action.payload;
            const data = {
                ...state,
                [user]: [...state[user], `${day}-${shift}-${slot}`],
                [previousUser]: [...state[previousUser].filter(shiftSlot => shiftSlot !==`${day}-${shift}-${slot}`)]
            }
            return data;
        }
    }
})

export default userSlice.reducer;