import { THIRD, INITIAL3 } from "../actions/thirdActions";

const thirdReducer = (state = 0, action) => {
    switch (action.type) {
        case THIRD : {
            return 0.5
        }
        case INITIAL3 : {
            return 0
        }
        default: return state
    }
}
export default thirdReducer;