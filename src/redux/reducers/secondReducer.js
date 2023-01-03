import { SECOND, INITIAL2 } from "../actions/secondActions";

const secondReducer = (state = 0, action) => {
    switch (action.type) {
        case SECOND : {
            return 0.7
        }
        case INITIAL2 : {
            return 0
        }
        default: return state
    }
}
export default secondReducer;