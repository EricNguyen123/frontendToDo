import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: [],
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        },
        editNote: (state, action) => {
            const newState = [...state];
            newState[action.payload.id] = action.payload.note;
            return (state = [...newState]);
        },
    },
});

const { reducer, actions } = appSlice;

export const { addNote, editNote } = actions;
export default reducer;
