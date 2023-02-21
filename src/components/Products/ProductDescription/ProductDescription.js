import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../../App/App";
import './ProductDescription.css'

import { fetchProductDescription } from "../../../asyncActions/ProductDescriptionFetch";
import Button from "../../UI/Button/Button";
import { addItemAction } from "../../../store/cartReducer";

function ProductDescription(){     
    let prodDescription = useSelector(store => store.productDescription.productDescription)    
    let dispatch = useDispatch()

    const {id} = useParams()

    useEffect(() => {
        dispatch(fetchProductDescription(id))
    },[]) 
   
    return(        
        <div className="product_main margin_width">
            <h2 className="product_titel">{prodDescription?.title}</h2>
            <div className="product">
                <div className="product_photo" style={{backgroundImage: `url(${URL + prodDescription?.image})`}}></div>
                <div className="product_info">
                    <div className="product_info_info">
                        <div className="product_price">
                            <h3>{prodDescription?.price}€</h3>
                            <p>{prodDescription?.discont_price != prodDescription?.price ? '-' + prodDescription?.discont_price + '€' : ''}</p>
                            <p> { Math.round(((prodDescription?.price-prodDescription?.discont_price)/(prodDescription?.price))*100) != '0'? '-' + Math.round(((prodDescription?.price-prodDescription?.discont_price)/(prodDescription?.price))*100) + '€' : ''}</p>
                        </div>
                        <div className="product_price_button">                            
                            <Button onClick={()=> dispatch(addItemAction(prodDescription))} title='Add to Cart' color='green' size='big'/>
                        </div>                            
                            <hr/>
                            <p className="product_text text_titel">Description</p>
                            <p className="product_text">{prodDescription?.description}</p>
                    </div>    
                </div>                   
            </div>
        </div>
    )
}

export default ProductDescription