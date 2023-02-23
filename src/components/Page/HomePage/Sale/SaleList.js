import './SaleList.css'

import { useSelector, useDispatch } from "react-redux"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../../../../asyncActions/ProductsFetch";
import ProductsList from "../../../Products/ProductsList/ProductsList";


function SaleList(props){ 
    const {number} = props   

    let prod = useSelector(store => store.products.products)
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchAllProducts())
    },[])

    const products = prod.filter(elem => elem.price != elem.discont_price).sort(()=> Math.random()- Math.random()).filter((e, index)=> index < number)
       
    return(
        <div className="margin_width">
            <h2 className="main_text">Sale</h2>
            <div className="list_of_products">
                {products.map((elem) =>                    
                    <Link key={elem.id} to={`/products/${elem.id}`}>                                     
                        <ProductsList title={elem.title} image={elem.image} price={elem.price} discont_price={elem.discont_price} elem={elem}/>      
                    </Link>                             
                )}
            </div>
        </div>       
    )
}

export default SaleList