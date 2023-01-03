import { FOURTH, INITIAL4 } from "../actions/fourthActions";

const fourthReducer = (state = 0, action) => {
    switch (action.type) {
        case FOURTH : {
            return 0.2
        }
        case INITIAL4 : {
            return 0
        }
        default: return state
    }
}
export default fourthReducer;