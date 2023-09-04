import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import noteSlice from './noteSlice';

const rootReducers = {
    appSlice: appSlice,
    noteSlice: noteSlice,
};

const store = configureStore({
    reducer: rootReducers,
});

export default store;
