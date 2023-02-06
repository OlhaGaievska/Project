import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

import Basket from "../Basket/Basket";
import Catalog from "../Catalog/Catalog";
import Categories from "../Categories/Categories";
import Contacts from "../Contacts/Contacts";
import Home from "../Home/Home";
import Not_Found from "../Not_Found/Not_Found";
import Product_description from "../Product_description/Product_description";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CategoryProducts from "../CategoryProducts/CategoryProducts";

function App(){
    return(
        <div> 
            <div>             
                <Router>
                    <Header/> 
                    <Routes>
                        <Route path="/" element = {<Home/>}/>
                            <Route path="/products" element = {<Catalog/>}/>
                            <Route path="/categories" element = {<Categories/>}/>                        
                            <Route path="/contacts" element = {<Contacts/>}/>
                            <Route path="/basket" element = {<Basket/>}/>
                            <Route path="/product/:id" element = {<Product_description/>}/>                            
                            <Route path="/catalog" element = {<Catalog/>}/>
                            <Route path="/categories/:categoryId" element = {<CategoryProducts/>}/>                 
                            <Route path="*" element = {<Not_Found/>}/>                                            
                    </Routes>
                </Router>
                <Footer/> 
            </div>        
        </div>
    )
}

/* <Button title='All promotions' color='black_white' size='big'/>                
                <Button title='Add to Shopping Cart' color='light_green' size='big'/>
                <Button title='More' color='white' size='big'/>*/

export default App