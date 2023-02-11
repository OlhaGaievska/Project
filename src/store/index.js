import {applyMiddleware, combineReducers, createStore} from 'redux'

import thunk from 'redux-thunk'
import { cartReducer } from './cartReducer'

import { categoriesReducer } from './categoriesReducer'
import { categoryProductsReducer } from './categoryProductsReducer'

import { oneProductReducer } from './oneProductReducer'
import { productsReducer } from './productsAction'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    categoryProducts: categoryProductsReducer,
    oneProduct: oneProductReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))