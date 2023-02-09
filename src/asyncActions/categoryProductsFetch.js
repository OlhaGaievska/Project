import { URL } from "../components/App/App"
import { categoryProductsAction } from "../store/categoryProductsReducer"

export const fetchCategoryProducts = (id) => {
    return function(dispatch){
        let url = URL + `/categories/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(categoryProductsAction(data)))
    }
}