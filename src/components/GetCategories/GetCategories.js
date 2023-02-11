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
                        <div className='categories_foto' style={{backgroundImage: `url(${URL + elem.image})`}}></div>                 
                        <h2 className="getcategories_categories_text">{elem.title}</h2>            
                    </div>
                </Link>)}
        </div>     
    )      
} 
export default GetCategories