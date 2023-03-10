import flovers from './flovers.png';
import { Link } from 'react-router-dom';
import './NewSeasonSale.css'
import Button from '../../../UI/Button/Button';

function NewSeasonSale(){
    return(
        <div className='new_season_sale'>
            <div className='new_season_sale_main'>
                <h1>Sale</h1>
                <h3>in honor of the new season</h3>
                <div className='new_season_sale_button'>                
                    <Link to={'/sale'}>  
                        <Button title='Promotions' color='black_white' size='big'/>
                    </Link>             
                    <Link to={'/products/all'}>    
                        <Button title=' More ' color='white' size='big'/>
                    </Link>                    
                </div>                           
            </div>                
            <div className='new_season_sale_foto'>                     
                <img width={679} height={641}
                    src={flovers}
                    alt="flovers_photo"
                    className="flovers_photo"
                />                    
            </div>                           
        </div>
    )
}
        
export default NewSeasonSale