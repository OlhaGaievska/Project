const defaultState = {
    categoryProducts: []
}

const CATEGORY = 'CATEGORY';

export const categoryProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CATEGORY:
            return {...state, products: [...action.payload]}       
        default:
            return state
    }
}

export const categoryProductsAction = (payload) => ({type: CATEGORY, payload})