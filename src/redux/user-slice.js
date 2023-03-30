import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial State
 */
const initialState = {
    'x1': {
        'shifts': {
            'monday': [],
            'tuesday': [],
            'wednesday': [],
            'thursday': [],
            'friday': [],
        }
    },
    'x2': {
        'shifts': {
            'monday': [],
            'tuesday': [],
            'wednesday': [],
            'thursday': [],
            'friday': [],
        }
    },
    'x3': {
        'shifts': {
            'monday': [],
            'tuesday': [],
            'wednesday': [],
            'thursday': [],
            'friday': [],
        }
    },
    'x4': {
        'shifts': {
            'monday': [],
            'tuesday': [],
            'wednesday': [],
            'thursday': [],
            'friday': [],
        }
    },
    'x5': {
        'shifts': {
            'monday': [],
            'tuesday': [],
            'wednesday': [],
            'thursday': [],
            'friday': [],
        }
    },
    'x6': {
        'shifts': {
            'monday': [],
            'tuesday': [],
            'wednesday': [],
            'thursday': [],
            'friday': [],
        }
    },
    'x7': {
        'shifts': {
            'monday': [],
            'tuesday': [],
            'wednesday': [],
            'thursday': [],
            'friday': [],
        }
    } 
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /**
         * Add a user shift
         * @param {string} user 
         * @param {string} slot 
         * @param {string} time 
         */
        addUserShift: (user, slot, time ) => {
            // do some action over here
        },
        /**
         * Remove user shift
         * @param {string} user 
         * @param {string} slot 
         * @param {string} time 
         */
        removeUserShift: (user, slot, time) => {
            // do some action over here
        }
    }
})

export default userSlice.reducer;