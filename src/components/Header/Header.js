import Button from '../UI/Button/Button'
import './Header.css'
import logo from './logo.png';
import basket from './basket.png';

function Header(){
    return(
        <header className='header margin_width'>
            <div className='header_logo'>
                <div className='header_logo_img'>
                    <img
                        src={logo}
                        alt="logo_photo"
                        className="logo_photo"
                    />
                </div>
                <div className='header_logo_button'>
                <Button title='Catalog' color='green' size='small'/>
                </div>
            </div>
            <div className='header_nav'>
                <div className='header_nav_block'>
                    <nav className='header_nav_block_nav'>
                        <ul class="header_menu_ul">
                            <li class="header_menu_li">
                                <a href='/categories'>Categories</a>  
                            </li>
                            <li class="header_menu_li">
                                <a href=''>Coupon</a>  
                            </li>
                            <li class="header_menu_li">
                                <a href=''>Stock</a>  
                            </li>
                            <li class="header_menu_li">
                                <a href='/contacts'>Contacts</a>  
                            </li>                          
                        </ul>                         
                    </nav>
                </div>
                <div className='header_block_photo'>
                    <img
                    src={basket}
                    alt="basket_photo"
                    className="basket_photo"
                    />
                </div>
            </div>        
        </header>
    )
}

export default Header