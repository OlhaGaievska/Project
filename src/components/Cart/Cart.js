import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addCountAction, deletCountAction, remCountAction } from "../../store/cartReducer"

import { URL } from '../App/App'
import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import './Cart.css'


function Cart(){ 
    const cart = useSelector(store => store.cart.cart)
    let dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
    
    return(
    <div className="main margin_width">
        <div className='cart_main '>
            <h2 className='main_text'>Cart</h2>
            <div className='cart_header'>
                <p>Home / Cart </p>
                <Link to={'/products/all'}>
                    <button>Back to catalog</button>
                </Link>
            </div>            
            <hr/>
                {cart.map(elem => 
                <div className='cart'>
                    <div className='cart_cart'>
                        <div className='cart_photo_block'>
                            <div className='cart_photo' style={{backgroundImage: `url(${URL + elem.image})`}}></div>
                        </div>
                        <div className='cart_text_block'>
                            <p className='cart_titel'>{elem.title}</p>
                            <div className='cart_couter'>
                                <button onClick={() => dispatch(remCountAction(elem.id))}>-</button>
                                <p>{elem.count}</p>
                                <button onClick={() => dispatch(addCountAction(elem.id))} >+</button>
                            </div>
                        </div>
                        <div className='cart_price_block'>
                            <p className='cart_price'>{Math.round(elem.price * elem.count)}€</p>
                            <p className='cart_discont_price'>
                                {elem.discont_price !== elem.price ? 
                                Math.round(elem.discont_price * elem.count) + '€': ''}
                            </p>
                        </div> 
                        <div className='delet_block'>
                            <button onClick={() => dispatch(deletCountAction(elem.id))}>X</button>
                        </div>                
                    </div>        
                    <hr/>
                </div>
                )}                
        </div>
        <div className='order_details'>
            <p className='order_details_text'>Order Details</p>
            <div className='sum'>
                <p className='order_details_sum'>Sum</p>
                <p className='order_details_sum_number'>
                    {cart.reduce((sum, elem) => Math.round(sum + (elem.price * elem.count)), 0) != 0 ? 
                    (cart.reduce((sum, elem) => Math.round(sum + (elem.price * elem.count)), 0)) + '€' : ''}
                </p>  
            </div>            
            <Input type='tel' size='long_big' placeholder='Your phone number'/>
            <Button title='Order' color='green' size='very_long'/>
        </div>
    </div>
    )
}

export default Cart