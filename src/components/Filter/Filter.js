import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchCategoryProducts } from "../../asyncActions/categoryProductsFetch"

import { fetchProducts } from "../../asyncActions/productsFetch"
import { filterCategoryProductsAction, sortCategoryProductsAction } from "../../store/categoryProductsReducer"
import { filterProductsAction, sortProductsAction } from "../../store/productsAction"

import Input from "../UI/Input/Input"


import './Filter.css'

function Filter(props){
    const{type}=props
    const {id} = useParams() 
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategoryProducts(id))
    },[])

    const allproducts = 'allproducts'
    const categoryproducts = 'categoryproducts'

    if ( type === allproducts ){
    return( 
    <div className='filter'>
        <div className='filter_price'>
            <label>Price: </label>
                <Input type='text' placeholder='from' size='small_input'/>
                <Input type='text' placeholder='to' size='small_input'/>           
        </div>
        <div className='filter_checkbox'>
           <p>Sale:</p>      
            <input onChange={(e) => dispatch(filterProductsAction(e.target.checked))} id="checkbox_sale" type='checkbox'/>       
        <label for="checkbox_sale"></label> 
        </div>
        <div className='filter_select'>
            <label>Sort:</label>
                <select onChange={(e) => dispatch(sortProductsAction(e.target.value))}>
                    <option value={0}>Most Relevant</option>
                    <option value={1}>Price: High - Low</option>
                    <option value={2}>Price: Low - High</option>
                    <option value={3}>Alphabetical</option>
                </select>
        </div>    
    </div>
    )}
    else if(type === categoryproducts){
        return(
        <div className='filter'>
            <div className='filter_price'>
                <label>Price: </label>
                    <Input type='text' placeholder='from' size='small_input'/>
                    <Input type='text' placeholder='to' size='small_input'/>           
            </div>
            <div className='filter_checkbox'>
               <p>Sale:</p>      
                <input onChange={(e) => dispatch(filterCategoryProductsAction(e.target.checked))} id="checkbox_sale" type='checkbox'/>       
            <label for="checkbox_sale"></label> 
            </div>
            <div className='filter_select'>
                <label>Sort:</label>
                    <select onChange={(e) => dispatch(sortCategoryProductsAction(e.target.value))}>
                        <option value={0}>Most Relevant</option>
                        <option value={1}>Price: Low - High</option>
                        <option value={2}>Price: High - Low</option>
                        <option value={3}>Alphabetical</option>
                    </select>
            </div>    
        </div>
        )
    }
}

export default Filter