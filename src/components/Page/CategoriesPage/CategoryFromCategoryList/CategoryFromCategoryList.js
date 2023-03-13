import { URL } from "../../../App/App"
import './CategoryFromCategoryList.css'


function CategoryFromCategoryList(props){ 

    const {title, image} = props

    return(
        <div className='categories_block'> 
            <img width={640} height={700}
                src={`${URL + image}`}
                alt='categories_photo'
                className='categories_photo'
            />              
            <h2 className="categories_text">{title}</h2>            
        </div>
    )
}
export default CategoryFromCategoryList