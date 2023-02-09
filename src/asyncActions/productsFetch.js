import { URL } from "../components/App/App"
import { productsAction } from "../store/productsAction"

export const fetchProducts = () => {
    return function(dispatch){
        let url = URL + '/products/all'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(productsAction(data)))
    }
} 