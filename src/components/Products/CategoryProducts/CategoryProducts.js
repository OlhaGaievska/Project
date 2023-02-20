import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCategories } from "../../../asyncActions/categoriesFetch";
import Filter from "../../UI/Filter/Filter";
import { fetchProductsByCategories } from "../../../asyncActions/ProductsFetch";
import ProductsList from "../ProductsList/ProductsList";

function CategoryProducts(){
    const {id} = useParams()  

    let prod = useSelector(store => store.products.products).filter(elem => elem.show)
    let categ = useSelector(store => store.categories.categories).find(elem=>elem.id ==id)
    let dispatch = useDispatch()  
    
    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchProductsByCategories(id))
    },[])

    return(
        <div className="margin_width">
            <h1 className="main_text">{categ?.title}</h1>
            <Filter type='categoryproducts'/> 
            <div className="list_of_products">                     
                {prod.map((elem) =>                    
                <Link key={elem.key} to={`/categories/${id}`}>
                    <Link key={elem.key} to={`/products/${elem.id}`}>                                                     
                        <ProductsList title={elem.title} image={elem.image} price={elem.price} discont_price={elem.discont_price} elem={elem}/>      
                    </Link>
                </Link>                             
                )}
            </div>
    </div>        
    )
}

export default CategoryProducts