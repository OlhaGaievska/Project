const defaultState = {
    categoryProducts: []
}

const CATEGORY = 'CATEGORY';
const SORT_CATEGORY_PRODUCTS = 'SORT_CATEGORY_PRODUCTS'
const FILTER_CATEGORY_PRODUCTS = 'FILTER_CATEGORY_PRODUCTS'

export const categoryProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CATEGORY:
            return {...state, categoryProducts: action.payload.map(elem => ({...elem, show: true}))}
        case SORT_CATEGORY_PRODUCTS:
            if(action.payload == 1){
                return {...state, categoryProducts: state.categoryProducts.slice().sort((crElem, nxElem) => nxElem.price - crElem.price)}
            } else if (action.payload == 2){
                return {...state, categoryProducts: state.categoryProducts.slice().sort((crElem, nxElem) => crElem.price - nxElem.price)}
            } else if (action.payload == 3){
                return {...state, categoryProducts: state.categoryProducts.slice().sort((crElem, nxElem) => {
                    if (crElem.title > nxElem.title) return 1
                    if (crElem.title < nxElem.title) return -1
                    if (crElem.title == nxElem.title) return 0
                })}
            } else {
                return state
            }
        case FILTER_CATEGORY_PRODUCTS:
            if (action.payload == true){
                return {...state, categoryProducts: state.categoryProducts.map(elem => {
                    if (elem.price - elem.discont_price === 0){
                        elem.show = !elem.show
                    }
                    return elem
                }) }
            } else {
                return {...state, categoryProducts: state.categoryProducts.map(elem => ({...elem, show: true}))}
            }              
        default:
            return state
    }
}

export const categoryProductsAction = (payload) => ({type: CATEGORY, payload})
export const sortCategoryProductsAction = (payload) => ({type: SORT_CATEGORY_PRODUCTS, payload})
export const filterCategoryProductsAction = (payload) => ({type: FILTER_CATEGORY_PRODUCTS, payload})