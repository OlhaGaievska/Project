import { oneProductAction } from "../store/oneProductReducer"


export const fetchOneProduct = (id) => {
    return function(dispatch){
        let url = `http://localhost:3333/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(oneProductAction(data)))
    }
}