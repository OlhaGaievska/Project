import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './cartReducer'
import { categoriesReducer } from './categoriesReducer'
import { productDescriptionReducer } from './ProductDescriptionReducer'
import { productsReducer } from './ProductReducer'


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,    
    productDescription: productDescriptionReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))