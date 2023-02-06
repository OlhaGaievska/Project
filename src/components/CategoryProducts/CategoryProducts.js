import { categoryProductsReducer } from "../../store/categoryProductsReducer"

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import Not_Found from "../Not_Found/Not_Found";

function CategoryProducts(){
    
    let catProducts = useSelector(store => store.categoryProducts.categoryProducts)
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(categoryProductsReducer())
    },[])

    return(
        <div>
            {(catProducts)?
                <div className='getcategories_categories margin_width'>
                    {catProducts.map((elem) =>                  
                        <h2>{elem.title}</h2>                                  
                    )}       
                </div>:
                <div>
                    <Not_Found/>
                </div>
            }
        </div>
    )
}

export default CategoryProducts