import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import Not_Found from "../Not_Found/Not_Found";
import { fetchOneProduct } from "../../asyncActions/oneProductFetch";


function OneProduct(){     

    let oneProduct2 = useSelector(store => store.oneProduct.oneProduct)    
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOneProduct())
    },[])
   
    console.log(oneProduct2)

    return(
        <div>
            {oneProduct2.title}
            {oneProduct2.price}      
        </div> 
    )
}

export default OneProduct