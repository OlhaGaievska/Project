import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

import { fetchCategoryProducts } from "../../asyncActions/categoryProductsFetch";
import { Link, useParams } from "react-router-dom";
import Get_List_of_products from "../Get_List_of _products/Get_List_of_products";
import { fetchCategories } from "../../asyncActions/categoriesFetch";
import Filter from "../Filter/Filter";

function CategoryProducts(){
    const {id} = useParams()  

    let catProducts = useSelector(store => store.categoryProducts.categoryProducts)
    let allCategories = useSelector(store => store.categories.categories).find(elem=>elem.id ==id)
    let dispatch = useDispatch()    
    
    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchCategoryProducts(id))
    },[])

    return(
        <div className="margin_width">
            <h1 className="main_text">{allCategories?.title}</h1>
            <Filter type='categoryproducts'/> 
            <div className="list_of_products">                     
                {catProducts.map((elem) =>                    
                <Link to={`/categories/${id}`}>
                    <Link to={`/products/${elem.id}`}>                                                     
                        <Get_List_of_products title={elem.title} image={elem.image} price={elem.price} discont_price={elem.discont_price} elem={elem}/>      
                    </Link>
                </Link>                             
                )}
            </div>
    </div>        
    )
}

export default CategoryProducts