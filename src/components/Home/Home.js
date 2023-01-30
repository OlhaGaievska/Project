import Button from '../UI/Button/Button'
import './Home.css'
import flovers from './flovers.png';

import gnome from './gnome.png';
import GetCategories from '../GetCategories/GetCategories';


function Home(){
    return(
        <div>
            <div className='block_sale'>
                <div className='block_sale_main'>
                    <h2 className='block_text big_text'>Sale</h2>
                    <h3 className='block_text'>in honor of the new season</h3>
                <div className='block_sale_button'>
                    <Button title='Promotions' color='black_white' size='big'/>
                    <Button title='Read More' color='white' size='big'/>
                </div>                           
                </div>
                <div className='block_sale_foto'>        
                    <img
                        src={flovers}
                        alt="flovers_photo"
                        className="flovers_photo"
                    />        
                </div>
                           
            </div>
            <div className='block_categories'>
                <div className='block_categories_text_and_button margin_width'>
                    <h2 className='block_categories_text'>Categorie</h2>
                    <Button title='All categories' color='silver' size='small' />
                </div>    
                <div className='block_categories_grid'>
                    <GetCategories number = {4}/>
                </div>
            </div>
            <div className='block_gnome'>
                <div className='block_gnome_photo'>
                    <img
                    src={gnome}
                    alt="gnome_photo"
                    className="gnome_photo"
                    />
                </div>
                <div className='block_gnome_discount'>
                    <h2 className='block_gnome_discount_text big_text'>Скидка 5%</h2> 
                    <h3 className='block_gnome_discount_text small_text'>на первый заказ</h3>
                    <Button title='Get discount' color='white' size='long'/>
                </div>                
            </div> 
        </div>
    )
}

export default Home