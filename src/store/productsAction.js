const defaultState = {
    products: []
}

const ADD_PRODUCTS = 'ADD_PRODUCTS'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {...state, products: action.payload.map(elem => ({...elem, show: true}))}
        case SORT_PRODUCTS:
            if(action.payload == 1){
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
            if (action.payload == true){
                return {...state, products: state.products.map(elem => {
                    if (elem.price - elem.discont_price === 0){
                        elem.show = !elem.show
                    }
                    return elem
                }) }
            } else {
                return {...state, products: state.products.map(elem => ({...elem, show: true}))}
            }       
        default:
            return state
    }
}

export const productsAction = (payload) => ({type: ADD_PRODUCTS, payload})
export const sortProductsAction = (payload) => ({type: SORT_PRODUCTS, payload})
export const filterProductsAction = (payload) => ({type: FILTER_PRODUCTS, payload})