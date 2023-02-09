import { URL } from "../components/App/App"
import { categoriesAction } from "../store/categoriesReducer"

export const fetchCategories = () => {    
    return function(dispatch){
        let url = URL + '/categories/all'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(categoriesAction(data)))
    }
} 