const defaultState = {
    products: []
}
const ADD_PRODUCTS = 'ADD_PRODUCTS'

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {...state, products: [...action.payload]}       
        default:
            return state
    }
}

export const productsAction = (payload) => ({type: ADD_PRODUCTS, payload})