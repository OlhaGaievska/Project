const defaultState = {
    productDescription: {}
}

const DESCRIPTION = 'DESCRIPTION';

export const productDescriptionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DESCRIPTION:
            return {...state,  productDescription: action.payload}       
        default:
            return state
    }
}

export const productDescriptionAction = (payload) => ({type: DESCRIPTION, payload})