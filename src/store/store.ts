import {configureStore, combineReducers} from '@reduxjs/toolkit';
import notes from './notes';
import toast from './toast';

const store = configureStore({
    reducer: combineReducers({notes, toast})
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;