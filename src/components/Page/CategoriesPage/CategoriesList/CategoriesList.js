import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import './CategoriesList.css'
import { Link } from "react-router-dom";
import { fetchCategories } from "../../../../asyncActions/categoriesFetch";
import Button from "../../../UI/Button/Button";
import CategoryFromCategoryList from "../CategoryFromCategoryList/CategoryFromCategoryList";


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
                    <Link key={elem.id} to={`/categories/${elem.id}`}>                
                        <CategoryFromCategoryList title={elem.title} image={elem.image}/>
                    </Link>)}
            </div> 
        </div>     
    )      
} 
export default CategoriesList