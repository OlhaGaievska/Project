import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import './CategoriesList.css'
import { Link } from "react-router-dom";
import { URL } from "../../../App/App"
import { fetchCategories } from "../../../../asyncActions/categoriesFetch";
import Button from "../../../UI/Button/Button";


function CategoriesList(props){ 
    const {number} = props    
    let categ = useSelector(store => store.categories.categories)    
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())    
    },[]);    
        
    const cat = categ.filter((e, index)=> index < number)   
   
    return(
        <div className="margin_width">
            <div className="categories_info">
                <h1 className='main_text'>Categories</h1>
                <Link to={'/categories/all'}>
                    <div>{number < 5 ? <Button title='All categories' color='silver' size='small' /> : ''}</div>
                </Link>
            </div>                  
            <div className='categories'>                          
                {cat.map((elem) =>            
                    <Link to={`/categories/${elem.id}`}>                
                        <div className='categories_block'> 
                            <div className='categories_foto' style={{backgroundImage: `url(${URL + elem.image})`}}></div>                 
                            <h2 className="categories_text">{elem.title}</h2>            
                        </div>
                    </Link>)}
            </div> 
        </div>     
    )      
} 
export default CategoriesList