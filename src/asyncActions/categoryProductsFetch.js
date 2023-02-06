import { categoryProductsAction } from "../store/categoryProductsReducer"

/*export const fetchCategoryProducts = (categoryId) => {
    return function(dispatch){
        let url = `http://localhost:3333/categories/${categoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(categoryProductsAction(data)))
    }
} */