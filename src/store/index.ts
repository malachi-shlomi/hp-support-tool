import { configureStore } from '@reduxjs/toolkit';
import caseSlice from './reducers/caseSlice';

const store = configureStore({
    reducer: {
        case: caseSlice,
    }
});

export default store;