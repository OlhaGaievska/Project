import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

import './GetCategories.css'

import { fetchCategories } from "../../asyncActions/categoriesFetch";
import { Link } from "react-router-dom";
import { URL } from "../App/App";


function GetCategories(props){ 
    const {number} = props
     
    let allCategories = useSelector(store => store.categories.categories)    
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    },[])
        
    const categories2 = allCategories.filter((e, index)=> index < number)
   
    return(     
        <div className='getcategories_categories'>                
            {categories2.map((elem) =>            
                <Link to={`/categories/${elem.id}`}>                
                    <div  className='getcategories_categories_foto'>   
                        <img width={310} height={300}
                            src={URL + elem.image}
                            alt="categories_photo"
                            className="photo"    
                        />
                        <h2 className="getcategories_categories_text">{elem.title}</h2>            
                    </div>
                </Link>)}
        </div>     
    )      
} 
export default GetCategories