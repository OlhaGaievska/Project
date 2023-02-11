import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchOneProduct } from "../../asyncActions/oneProductFetch";
import { useParams } from "react-router-dom";
import { URL } from "../App/App";

import './OneProduct.css'
import Button from "../UI/Button/Button";
import { addItemAction } from "../../store/cartReducer";

function OneProduct(){     

    let oneProduct2 = useSelector(store => store.oneProduct.oneProduct)    
    let dispatch = useDispatch()

    const {id} = useParams()

    useEffect(() => {
        dispatch(fetchOneProduct(id))
    },[]) 
   
    return(        
        <div className="product_main margin_width">
            <h2 className="product_titel">{oneProduct2?.title}</h2>
            <div className="product">
                <div className="product_photo" style={{backgroundImage: `url(${URL + oneProduct2?.image})`}}></div>
                <div className="product_info">
                    <div className="product_info_info">
                        <div className="product_price">
                            <h3>{oneProduct2?.price}€</h3>
                            <p>{oneProduct2?.discont_price != oneProduct2?.price ? '-' + oneProduct2?.discont_price + '€' : ''}</p>
                            <p> { Math.round(((oneProduct2?.price-oneProduct2?.discont_price)/(oneProduct2?.price))*100) != '0'? '-' + Math.round(((oneProduct2?.price-oneProduct2?.discont_price)/(oneProduct2?.price))*100) + '€' : ''}</p>
                        </div>                            
                            <Button onClick={()=> dispatch(addItemAction(oneProduct2))} title='Add to Cart' color='green' size='big'/>                            
                            <hr/>
                            <p className="product_text text_titel">Description</p>
                            <p className="product_text">{oneProduct2?.description}</p>
                    </div>    
                </div>                   
            </div>
        </div>
    )
}

export default OneProduct