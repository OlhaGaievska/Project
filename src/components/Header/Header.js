import Button from '../UI/Button/Button'
import './Header.css'
import logo from './logo.png';
import basket from './basket.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header(){
    const cart = useSelector(store => store.cart.cart)
    return(
        <header className='header margin_width'>
            <div className='header_logo'>
                <div className='header_logo_img'>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt="logo_photo"
                            className="logo_photo"
                        />
                    </Link>
                </div>
                <div className='header_logo_button'>
                <Link to={'/products/all'}>
                    <Button title='Catalog' color='green' size='small'/>
                </Link>
                </div>
            </div>
            <div className='header_nav'>
                <div className='header_nav_block'>
                    <nav className='header_nav_block_nav'>
                        <ul className="header_menu_ul">
                            <li className="header_menu_li">
                                <a href='/categories/all'>Categories</a>  
                            </li>
                            <li className="header_menu_li">
                                <a href='/#discount'>Coupon</a>    
                            </li>
                            <li className="header_menu_li">
                                <a href='/#getSale'>Stock</a>  
                            </li>
                            <li className="header_menu_li">
                                <a href='/contacts'>Contacts</a>  
                            </li>                          
                        </ul>                         
                    </nav>
                </div>
                <Link to={'/cart'}>
                    <div className='header_block_photo'>
                        <img
                        src={basket}
                        alt="basket_photo"
                        className="basket_photo"
                        />
                        <p className='header_cart_number'>{`${cart.reduce((sum, value ) => sum + value.count, 0)}`}</p>
                    </div>
                </Link>
            </div>        
        </header>
    )
}

export default Header