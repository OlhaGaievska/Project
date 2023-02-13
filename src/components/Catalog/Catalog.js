import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchProducts } from "../../asyncActions/productsFetch"
import { filterProductsAction, sortProductsAction } from "../../store/productsAction"
import Get_List_of_products from "../Get_List_of _products/Get_List_of_products"
import Input from "../UI/Input/Input"

import './Catalog.css'

function Catalog(){
    let allProducts = useSelector(store => store.products.products).filter(elem => elem.show)
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
    },[])
       
    return(
    <div className="margin_width">
    <h1 className='main_text'>Catalog</h1>
    <div className='filter'>
        <div className='filter_price'>
            <label>Price</label>
                <Input type='text' placeholder='from' size='small_input'/>
                <Input type='text' placeholder='to' size='small_input'/>           
        </div>
        <div className='checkbox'>
        <label>Sale</label>          
            <input onChange={(e) => dispatch(filterProductsAction(e.target.checked))} type='checkbox' size='small_input'/>       
        </div>
        <label>Sort:</label>
            <select onChange={(e) => dispatch(sortProductsAction(e.target.value))}>
                <option value={0}>Most Relevant</option>
                <option value={1}>Price: Low - High</option>
                <option value={2}>Price: High - Low</option>
                <option value={3}>Alphabetical</option>
            </select>
    </div>
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