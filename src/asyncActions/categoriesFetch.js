import { categoriesAction } from "../store/categoriesReducer"


export const fetchCategories = () => {
    return function(dispatch){
        let url = 'http://localhost:3333/categories/all'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(categoriesAction(data)))
    }
} 