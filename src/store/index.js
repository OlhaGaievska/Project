import {applyMiddleware, combineReducers, createStore} from 'redux'

import thunk from 'redux-thunk'
import { fetchCategories } from '../asyncActions/categoriesFetch'


const rootReducer = combineReducers({
    categories: fetchCategories,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))