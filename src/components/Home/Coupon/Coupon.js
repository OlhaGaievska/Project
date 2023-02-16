import Input from "../../UI/Input/Input";
import gnome from './gnome.png';
import './Coupon.css'
import Button from "../../UI/Button/Button";

function Coupon(){
    
    const mask = [{
        '+': '+',
        '*': '[0-9]',        
      }];
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
                <Input type='tel' size='long_big' color='white_input' placeholder='+4'  mask='+4\9 99 999 99'/>
                <Button title='Get discount' color='white' size='long'/>
            </div>
        </div>                
    </div>
    )
}

export default Coupon