import { useDispatch } from "react-redux"
import { filterProductsAction, priceFromProductsAction, priceToProductsAction, sortProductsAction } from "../../../store/ProductReducer"

import Input from "../Input/Input"
import './Filter.css'

function Filter(){ 
    let dispatch = useDispatch()   
    
    return( 
    <div className='filter'>
        <div className='filter_price'>
            <label>Price: </label>
                <Input onChange={(e) => dispatch(priceFromProductsAction(e.target.value))} min={0} type='number' placeholder='from' size='small_input'/>
                <Input onChange={(e) => dispatch(priceToProductsAction(e.target.value))} type='number' placeholder='to' size='small_input'/>           
        </div>
        <div className='filter_checkbox'>
           <p>Sale:</p>      
            <input onChange={(e) => dispatch(filterProductsAction(e.target.checked))} id="checkbox_sale" type='checkbox'/>       
        <label htmlFor="checkbox_sale"></label> 
        </div>
        <div className='filter_select'>
            <label>Sort:</label>
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