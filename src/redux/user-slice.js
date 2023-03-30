import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    users: {
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
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserShift: (time, slot) => {
            // do some action over here
        },
        removeUserShift: (time, slot) => {
            // do some action over here
        }
    }
})