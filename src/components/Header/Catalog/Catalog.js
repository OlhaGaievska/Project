import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchAllProducts } from "../../../asyncActions/ProductsFetch"
import ProductsList from "../../Products/ProductsList/ProductsList"
import Filter from "../../UI/Filter/Filter"

import './Catalog.css'


function Catalog(){
    const {id} = useParams()
    let prod = useSelector(store => store.products.products).filter(elem => elem.show)
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchAllProducts())        
    },[id])

    return(
        <div className="margin_width">
        <h1 className='main_text'>Catalog</h1>
            <Filter/>
            <div className="catalog">            
                {prod.map((elem) =>                    
                    <Link key={elem.id} to={`/products/${elem.id}`}>                                     
                        <ProductsList title={elem.title} image={elem.image} price={elem.price} discont_price={elem.discont_price} elem={elem}/>      
                    </Link>                             
                )}
            </div>
        </div>           
    )      
}
export default Catalog