const defaultState = {
    categories: []
}
const ADD_CATEGORIES = 'ADD_CATEGORIES'

export const categoriesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CATEGORIES:
            return {...state, categories: [...action.payload]}
        default:
            return state
    }
}

export const categoriesAction = (payload) => ({type: ADD_CATEGORIES, payload})