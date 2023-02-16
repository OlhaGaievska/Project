import { URL } from "../components/App/App"
import { productDescriptionAction } from "../store/ProductDescriptionReducer"

export const fetchProductDescription = (id) => {
    return function(dispatch){
        let url = URL + `/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(productDescriptionAction(data[0])))
    }
}