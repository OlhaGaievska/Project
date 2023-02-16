import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemAction } from '../../../store/cartReducer'
import { URL } from '../../App/App'
import Button from '../../UI/Button/Button'
import './ProductsList.css'



function ProductsList (props){ 
    let dispatch = useDispatch()
    const {title, image, price, discont_price, elem} = props     
    return(              
        <div className='list_of_products_block'>                        
            <div className='list_of_products_foto' style={{backgroundImage: `url(${URL + image})`}}></div>
            <Link to={`/products/${elem.id}`}>
            <div className='list_of_product_info'>
                <div className='list_of_product_price'>
                    <p>{discont_price}€</p>
                    <p>{price != discont_price ? '-' + price + '€': ''}</p>
                    <p> { Math.round(((price-discont_price)/(price))*100) != '0'? '-' + Math.round(((price-discont_price)/(price))*100) + '€' : ''}</p>
                </div>        
            </div>   
            <div>
                <h4 className='list_of_product_titel'>{title}</h4>
            </div>
            </Link>
            <div className='button_list_of_product'>                
                <Button onClick={(e)=> {
                    e.preventDefault()
                    dispatch(addItemAction(elem))
                }} title='Add to cart' color='light_green' size='big'/>                
            </div>                                        
        </div>                                      
    )

}

export default ProductsList