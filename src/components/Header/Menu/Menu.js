import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Menu.css'
import basket from './basket.png';
import { useSelector } from "react-redux";

const Menu = () => {
    const cart = useSelector(store => store.cart.cart)
    
    const [burger_class, setBurgerClass] = useState("burger unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger clicked")
            setMenuClass("menu visible")           
        }
        else {
            setBurgerClass("burger unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="menu_block">
            <nav className="burger_nav">
                <div className="burger_menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>    
            <div className={menu_class}>                               
                <nav className='menu_nav'>                    
                    <ul className="menu_ul">
                        <li className="menu_li">
                            <a href='/categories/all'>Categories</a>  
                        </li>
                        <li className="menu_li">
                            <a href='/coupon'>Coupon</a>    
                        </li>
                        <li className="menu_li">
                            <a href='/sale'>Sale</a>  
                        </li>
                        <li className="menu_li">
                            <a href='/contacts'>Contacts</a>  
                        </li>                          
                    </ul>                                               
                </nav>
            </div>                        
            <div className='menu_cart_block'>
                <Link to={'/cart'}>
                    <img
                    src={basket}
                    alt="menu_cart_photo"
                    className="menu_cart_photo"
                    />
                    <p className='menu_cart_number'>{`${cart.reduce((sum, value ) => sum + value.count, 0)}`}</p>
                </Link> 
            </div>
        </div>
    
    )
}

export default Menu