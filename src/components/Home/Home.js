import { Link } from "react-router-dom"
import Button from '../UI/Button/Button'
import './Home.css'
import flovers from './flovers.png';
import gnome from './gnome.png';
import GetCategories from '../GetCategories/GetCategories';
import GetSale from '../GetSale/GetSale';


function Home(){
    return(
        <div>
            <div className='block_sale'>
                <div className='block_sale_main'>
                    <h1 className='block_text big_text'>Sale</h1>
                    <h3 className='block_text'>in honor of the new season</h3>
                <div className='block_sale_button'>                
                    <a href='#getSale'>
                        <Button title='Promotions' color='black_white' size='big'/>
                    </a>              
                <Link to={'/catalog'}>    
                    <Button title=' More ' color='white' size='big'/>
                </Link>                    
                </div>                           
                </div>                
                <div className='block_sale_foto'>                     
                    <img width={800} height={680}
                        src={flovers}
                        alt="flovers_photo"
                        className="flovers_photo"
                    />                    
                </div>                           
            </div>
            <div className='block_categories'>
                <div className='block_categories_text_and_button margin_width'>
                    <h2 className='main_text'>Categories</h2>
                    <a href='/categories'>
                        <Button title='All categories' color='silver' size='small' />
                    </a>
                </div>    
                <div className="block_categories_main margin_width">
                    <GetCategories number = {4}/>
                </div>
            </div>
            <div className='block_gnome' id="discount">
                <div className='block_gnome_photo'>
                    <img width={422} height={422}
                    src={gnome}
                    alt="gnome_photo"
                    className="gnome_photo"
                    />
                </div>
                <div className='block_gnome_discount' >
                    <h2 className='block_gnome_discount_text big_text'>Discount 5%</h2> 
                    <h3 className='block_gnome_discount_text small_text'>for the first order</h3>
                    
                    <Button title='Get discount' color='white' size='long'/>
                </div>                
            </div>
            
            <div className="margin_width" id="getSale">
                <h2 className="main_text">Stock</h2>
                <GetSale number = {4}/>
            </div> 
        </div>
    )
}

export default Home