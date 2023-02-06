const defaultState = {
    oneProduct: {}
}

const ONE_PRODUCT = 'ONE_PRODUCT';

export const oneProductReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ONE_PRODUCT:
            return {...state, oneProduct: action.payload}       
        default:
            return state
    }
}

export const oneProductAction = (payload) => ({type: ONE_PRODUCT, payload})