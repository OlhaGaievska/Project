import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchProducts } from "../../asyncActions/productsFetch"
import Get_List_of_products from "../Get_List_of _products/Get_List_of_products"

import './Catalog.css'

function Catalog(){
    let allProducts = useSelector(store => store.products.products)
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
    },[])
       
    return(
    <div className="margin_width">
    <h1 className='main_text'>Catalog</h1>
        <div className="catalog">            
            {allProducts.map((elem) =>                    
                <Link to={`/products/${elem.id}`}>                                     
                    <Get_List_of_products title={elem.title} image={elem.image} price={elem.price} discont_price={elem.discont_price} elem={elem}/>      
                </Link>                             
            )}
        </div>
    </div>           
    )    
}
export default Catalog