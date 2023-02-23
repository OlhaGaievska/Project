import { URL } from "../../../App/App"


function CategoryFromCategoryList(props){ 

    const {title, image} = props

    return(
        <div className='categories_block'> 
            <div className='categories_foto' style={{backgroundImage: `url(${URL + image})`}}></div>                 
            <h2 className="categories_text">{title}</h2>            
        </div>
    )
}
export default CategoryFromCategoryList