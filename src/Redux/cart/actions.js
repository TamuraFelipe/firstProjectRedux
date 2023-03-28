import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => {
    return {
        type: CartActionTypes.ADD_PRODUCT,
        payload
    }
}
export const removeProductFromCart = (payload) => {
    return {
        type: CartActionTypes.REMOVE_PRODUCT,
        payload
    }
}
export const increaseProductQuantity = (payload) => {
    return {
        type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
        payload
    }
}
export const decreaseProductQuantity = (payload) => {
    return {
        type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
        payload
    }
}