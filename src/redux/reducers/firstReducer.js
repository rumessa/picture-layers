import { FIRST, INITIAL1 } from "../actions/firstActions";

const firstReducer = (state = 0, action) => {
    switch (action.type) {
        case FIRST : {
            return 1
        }
        case INITIAL1 : {
            return 0
        }
        default: return state
    }
}
export default firstReducer;