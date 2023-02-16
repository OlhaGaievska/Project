import { URL } from "../components/App/App"
import { productsAction } from "../store/ProductReducer"


export const fetchAllProducts = () => {
    return function(dispatch){
        fetch(URL + '/products/all')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(productsAction(data))
            })
    }
} 

export const fetchProductsByCategories = (id) => {
    return function(dispatch){
        fetch(URL + `/categories/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(productsAction(data))
            })
    }
} 