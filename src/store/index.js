import {applyMiddleware, combineReducers, createStore} from 'redux'

import thunk from 'redux-thunk'

import { categoriesReducer } from './categoriesReducer'
import { categoryProductsReducer } from './categoryProductsReducer'
import { productsReducer } from './productsAction'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    categoryProducts: categoryProductsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))