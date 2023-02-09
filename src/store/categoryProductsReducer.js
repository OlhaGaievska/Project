const defaultState = {
    categoryProducts: []
}

const CATEGORY = 'CATEGORY';

export const categoryProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CATEGORY:
            return {...state, categoryProducts: [...action.payload]}       
        default:
            return state
    }
}

export const categoryProductsAction = (payload) => ({type: CATEGORY, payload})