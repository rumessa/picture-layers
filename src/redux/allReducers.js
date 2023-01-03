import { combineReducers } from "@reduxjs/toolkit";
import firstReducer from "./reducers/firstReducer";
import secondReducer from "./reducers/secondReducer";
import thirdReducer from "./reducers/thirdReducer";
import fourthReducer from "./reducers/fourthReducer";

const allReducers = combineReducers({
    first: firstReducer,
    second: secondReducer,
    third: thirdReducer,
    fourth: fourthReducer
});
export default allReducers;