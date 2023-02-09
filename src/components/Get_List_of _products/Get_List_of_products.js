import { URL } from '../App/App'
import Button from '../UI/Button/Button'
import './Get_List_of_products.css'

function Get_List_of_products (props){ 
    const {title, image, price, discont_price} = props     
    return(              
        <div className='list_of_products_block'>                        
            <img width={300} height={300}
                src={URL + image}
                alt="list_of_product_photo"
                className="photo"    
            />
            <div className='list_of_product_info'>
                <div className='list_of_product_price'>
                    <p>{price} €</p>
                    <p>{discont_price} €</p>
                    <p> - {Math.round(((price-discont_price)/(price))*100)} %</p>
                </div>
                    <h4>{title}</h4>
            </div>
            <div className='button_list_of_product'>
                <Button title='Add to Basket' color='light_green' size='big'/>
            </div>
                                        
        </div>                                      
    )

}

export default Get_List_of_products