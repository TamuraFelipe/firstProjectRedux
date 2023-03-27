import UserActiontypes from "./action-types";

const initialState = {
    currentUser: null,
}

const userReducer  = (state = initialState, action) => {
    switch(action.type) {
        case UserActiontypes.LOGIN:
        return {
            ...state,
            currentUser: action.payload
        };
        case UserActiontypes.LOGOUT:
        return {
            ...state,
            currentUser: null
        };
        default:
            return state;
    };
};

export default userReducer;