import { productsAction } from "../store/productsAction"


export const fetchProducts = () => {
    return function(dispatch){
        let url = 'http://localhost:3333/products/all'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(productsAction(data)))
    }
} 