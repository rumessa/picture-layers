import { configureStore as createStore } from '@reduxjs/toolkit'
import allReducers from './allReducers';

const reducer = allReducers;
const store = createStore({ reducer });
export default store;