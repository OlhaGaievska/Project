import { useDispatch } from 'react-redux'
import { addItemAction } from '../../store/cartReducer'
import { URL } from '../App/App'
import Button from '../UI/Button/Button'
import './Get_List_of_products.css'



function Get_List_of_products (props){ 
    let dispatch = useDispatch()
    const {title, image, price, discont_price, elem} = props     
    return(              
        <div className='list_of_products_block'>                        
            <div className='list_of_products_foto' style={{backgroundImage: `url(${URL + image})`}}></div>
            <div className='list_of_product_info'>
                <div className='list_of_product_price'>
                    <p>{price}€</p>
                    <p>{discont_price != price ? '-' + discont_price + '€': ''}</p>
                    <p> { Math.round(((price-discont_price)/(price))*100) != '0'? '-' + Math.round(((price-discont_price)/(price))*100) + '€' : ''}</p>
                </div>        
            </div>   
            <div>
                    <h4 className='list_of_product_titel'>{title}</h4>
            </div>
            <div className='button_list_of_product'>                
                <Button onClick={()=> dispatch(addItemAction(elem))} title='Add to cart' color='light_green' size='big'/>                
            </div>                                        
        </div>                                      
    )

}

export default Get_List_of_products