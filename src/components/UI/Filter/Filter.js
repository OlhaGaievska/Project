import { useRef } from "react"
import { useDispatch  } from "react-redux"
import { filterProductsAction, filterProductsPriceAction, sortProductsAction } from "../../../store/ProductReducer"


import Input from "../Input/Input"
import './Filter.css'

function Filter(){ 
    
    let dispatch = useDispatch()
    const formRef = useRef() 
    
    function setMinMaxPrice(e){                 
        let data = new FormData(formRef.current)
        data = Object.fromEntries(data)
        data.max_price = (!data.max_price) ? Infinity : data.max_price
        data.min_price = (!data.min_price) ? -Infinity : data.min_price
        dispatch(filterProductsPriceAction(data))        
    }
    
    return( 
    <div className='filter'>
        <div className='filter_price'>
            <label className='filter_label'>Price: </label>
            <form ref={formRef} onChange={(e) => setMinMaxPrice(e)}>
                <Input  name='min_price' type='number' placeholder='from' size='small_input'/>
                <Input  name='max_price' type='number' placeholder='to' size='small_input'/>
            </form>           
        </div>
        <div className='filter_checkbox'>
           <p className='filter_label'>Sale:</p>      
            <input onChange={(e) => dispatch(filterProductsAction(e.target.checked))} id="checkbox_sale" type='checkbox'/>       
            <label htmlFor="checkbox_sale"></label> 
        </div>
        <div className='filter_select'>
            <label className='filter_label'>Sort:</label>
                <select onChange={(e) => dispatch(sortProductsAction(e.target.value))}>
                    <option value={0}>Default</option>
                    <option value={1}>Price: High - Low</option>
                    <option value={2}>Price: Low - High</option>
                    <option value={3}>Alphabetical</option>
                </select>
        </div>    
    </div>
    )    
}

export default Filter