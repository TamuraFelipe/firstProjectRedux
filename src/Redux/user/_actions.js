import UserActiontypes from "./action-types"

export const loginUser = (payload) => {
    return{
        type: UserActiontypes.LOGIN,
        payload,
    };
};
export const logoutUser = () => {
    return {
        type: UserActiontypes.LOGOUT
    }
}