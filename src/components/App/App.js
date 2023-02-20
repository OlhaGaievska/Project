import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Catalog from "../Header/Catalog/Catalog";
import Categories from "../Header/Categories/Categories";
import Contacts from "../Home/Contacts/Contacts";
import Home from "../Home/Home";
import Header from "../Header/Header/Header";
import Footer from "../Footer/Footer";
import CategoryProducts from "../Products/CategoryProducts/CategoryProducts";
import NotFound from "../NotFound/NotFound";
import Cart from "../Header/Cart/Cart";
import ProductDescription from "../Products/ProductDescription/ProductDescription";
import Coupon from "../Home/Coupon/Coupon";

export const URL = 'http://localhost:3333'

function App(){
    
    return(
        <div> 
            <div>             
                <Router>
                    <Header/> 
                    <Routes>
                        <Route path="/" element = {<Home/>}/>
                            <Route path="/products/all" element = {<Catalog/>}/>
                            <Route path="/categories/all" element = {<Categories/>}/>                        
                            <Route path="/contacts" element = {<Contacts/>}/>
                            <Route path="/cart" element = {<Cart/>}/>
                            <Route path="/coupon" element = {<Coupon/>}/>
                            <Route path="/login" element = {<Home/>}/>
                            <Route path="/registrations" element = {<Home/>}/>                                                                                
                            <Route path="/products/:id" element = {<ProductDescription/>}/>                  
                            <Route path="/categories/:id" element = {<CategoryProducts/>}/>                                    
                            <Route path="*" element = {<NotFound/>}/>                                                                                                                               
                    </Routes>
                </Router>
                <Footer/> 
            </div>                  
        </div>
    )
}

export default App