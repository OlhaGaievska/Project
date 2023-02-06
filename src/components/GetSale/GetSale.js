import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import Not_Found from "../Not_Found/Not_Found";

import './GetSale.css'

import { fetchProducts } from "../../asyncActions/productsFetch";

/*{"id":1,
"title":"Savannah Summer Annual Collection",
"price":53,"discont_price":50,
"description":"We love this fusion of colorful blossoms, created by combining some of the most floriferous and high performance annuals we know in our Savannah Summer Collection. Cherry-red Zinnia and sunrise-hued Lantana provide a perpetual fountain of flowers amidst the dark purple spiky foliage of Tradescantia.",
"image":"/product_img/1.jpeg",
"createdAt":"2022-10-02T14:43:29.000Z",
"updatedAt":"2022-10-02T14:43:29.000Z",
"categoryId":1},*/

function GetSale(props){ 
    const {number} = props

    let allProducts = useSelector(store => store.products.products)
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    const products = allProducts.sort(()=> Math.random()- Math.random()).filter((e, index)=> index < number)
       
    return(
    <div>
        {(products)?
      
        <div className='sale margin_width'>            
            <div className='sale_main'>
                {products.map((elem) =>                 
                    <div className='sale_block'>
                        <img
                            src={`http://localhost:3333${elem.image}`}
                            alt="sale_photo"
                            className="sale_photo"    
                        />
                        <div className='sale_block_info'>
                            <div className='sale_block_price'>
                                <p>{elem.price} €</p>
                                <p>{elem.discont_price} €</p>
                                <p> - {Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                            </div>                        
                            <h4>{elem.title}</h4>
                        </div>
                    </div>          
                )}
            </div>       
        </div>:
            <div>
                <Not_Found/>
            </div>}
    </div>
    )
}

export default GetSale