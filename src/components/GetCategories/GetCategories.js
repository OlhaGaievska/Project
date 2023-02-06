import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import Not_Found from "../Not_Found/Not_Found";

import './GetCategories.css'

import { fetchCategories } from "../../asyncActions/categoriesFetch";
import { Link } from "react-router-dom";


function GetCategories(props){ 
    const {number} = props

    let allCategories = useSelector(store => store.categories.categories)    
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    },[])
        
    const categories2 = allCategories.filter((e, index)=> index < number)
   
    return(
        <div>
            {(categories2)?       
            <div className='getcategories_categories margin_width'>
                {categories2.map((elem) =>
                    <Link to={`/categories/${elem.categoryId}`}>
                        <div  className='getcategories_categories_foto'>   
                            <img
                                src={`http://localhost:3333${elem.image}`}
                                alt="categories_photo"
                                className="categories_photo"    
                            />
                            <h2 className="getcategories_categories_text">{elem.title}</h2>            
                        </div>
                    </Link>      
                )}       
            </div>:
                <div>
                    <Not_Found/>
                </div>}
        </div> 
    )
}

export default GetCategories