import gnome from './gnome.png';
import './Coupon.css'
import Button from "../../UI/Button/Button";
import InputMask from 'react-input-mask';

function Coupon(){
   
    return(    
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
            <div className='card_input_button'>
                <InputMask className="input_mask" mask="+4\9 99 999 99" maskChar=" " />                
                <Button title='Get discount' color='white' size='long'/>
            </div>
        </div>                
    </div>
    )
}

export default Coupon