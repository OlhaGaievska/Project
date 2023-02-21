const defaultState = {
    products: []
}

const ADD_PRODUCTS = 'ADD_PRODUCTS'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
const FILTER_PRODUCTS_PRICE = 'FILTER_PRODUCTS_PRICE'

export const productsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_PRODUCTS:
            return {...state, products: action.payload.map(elem => ({...elem, show: true, show2:true}))}
        case SORT_PRODUCTS:
            if (action.payload == 0){
                return {...state, products: state.products.slice().sort((crElem, nxElem) => crElem.id - nxElem.id)}
            } else if(action.payload == 1){
                return {...state, products: state.products.slice().sort((crElem, nxElem) => nxElem.price - crElem.price)}
            } else if (action.payload == 2){
                return {...state, products: state.products.slice().sort((crElem, nxElem) => crElem.price - nxElem.price)}
            } else if (action.payload == 3){
                return {...state, products: state.products.slice().sort((crElem, nxElem) => {
                    if (crElem.title > nxElem.title) return 1
                    if (crElem.title < nxElem.title) return -1
                    if (crElem.title == nxElem.title) return 0
                })}
            } else {
                return state
            }
        case FILTER_PRODUCTS:            
            if (action.payload){
                return {...state, products: state.products.map(elem => {
                    if (elem.price - elem.discont_price === 0){
                        elem.show2 = false
                    }
                    return elem
                }) }
            } else {
                return {...state, products: state.products.map(elem => ({...elem, show2: true}))}
            }
        case FILTER_PRODUCTS_PRICE:
            state.products =  state.products.map(elem => ({...elem, show: true}))
            return {...state, products: state.products.map(elem => {
                if (!(elem.discont_price > action.payload.min_price && elem.discont_price < action.payload.max_price)){
                    elem.show = false
                }
                return elem
            })}            
        default:
            return state
    }
}

export const productsAction = (payload) => ({type: ADD_PRODUCTS, payload})
export const sortProductsAction = (payload) => ({type: SORT_PRODUCTS, payload})
export const filterProductsAction = (payload) => ({type: FILTER_PRODUCTS, payload})
export const filterProductsPriceAction = (payload) => ({type: FILTER_PRODUCTS_PRICE, payload})