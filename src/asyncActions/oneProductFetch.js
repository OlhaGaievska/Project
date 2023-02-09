import { URL } from "../components/App/App"
import { oneProductAction } from "../store/oneProductReducer"

export const fetchOneProduct = (id) => {
    return function(dispatch){
        let url = URL + `/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(oneProductAction(data[0])))
    }
}