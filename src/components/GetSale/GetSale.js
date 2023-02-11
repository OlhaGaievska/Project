import { useSelector, useDispatch } from "react-redux"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../asyncActions/productsFetch";
import Get_List_of_products from "../Get_List_of _products/Get_List_of_products";


function GetSale(props){ 
    const {number} = props   

    let allProducts = useSelector(store => store.products.products)
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    const products = allProducts.filter(elem => elem.price != elem.discont_price).sort(()=> Math.random()- Math.random()).filter((e, index)=> index < number)
       
    return(
        <div className="list_of_products">
            {products.map((elem) =>                    
                <Link to={`/products/${elem.id}`}>                                     
                    <Get_List_of_products title={elem.title} image={elem.image} price={elem.price} discont_price={elem.discont_price} elem={elem}/>      
                </Link>                             
            )}
        </div>       
    )
}

export default GetSale