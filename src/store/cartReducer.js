const defaultState = {
    cart: JSON.parse(localStorage.getItem('cart')) ?? []}

const ADD_ITEM = 'ADD_ITEM'
const ADD_COUNT = 'ADD_COUNT'
const REM_COUNT = 'REM_COUNT'
const DEL_COUNT = 'DEL_COUNT'

export const cartReducer = (state = defaultState, action) =>{
    switch(action.type){
        case ADD_ITEM:
            let cart_add = state.cart.find(elem => elem.id == action.payload.id)
            if (cart_add) {             
                return {...state, cart: state.cart.map(elem => {
                    if (elem.id == cart_add.id){
                        elem.count = elem.count + 1
                    }
                    return elem
                })}
            } else {
                return {...state, cart: [...state.cart, {...action.payload, count: 1}]}}            
        case ADD_COUNT:
            return {...state, cart: state.cart.map(elem => {
                if (elem.id == action.payload){
                    elem.count = elem.count + 1
                    }
                return elem
            })}
        case REM_COUNT:
            let c = state.cart.find(elem => elem.id == action.payload)
            if (c.count == 1){
                return {...state, cart: state.cart.filter(elem => elem.id != action.payload)}
            } else {
                return {...state, cart: state.cart.map(elem => {
                    if (elem.id == action.payload){
                        elem.count = elem.count - 1
                    }
                    return elem
                    })}
                }
        case DEL_COUNT:
            return {...state, cart: state.cart.filter(elem => elem.id != action.payload)}
        default:
            return state
    }   
}

export const addItemAction = (payload) => ({type: ADD_ITEM, payload})
export const addCountAction = (payload) => ({type: ADD_COUNT, payload}) 
export const remCountAction = (payload) => ({type: REM_COUNT, payload})
export const deletCountAction = (payload) => ({type: DEL_COUNT, payload})