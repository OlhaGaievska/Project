import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Catalog from "../Page/CatalogPage/Catalog";
import Categories from "../Page/CategoriesPage/Categories";
import Header from "../Header/Header/Header";
import Footer from "../Footer/Footer";
import CategoryProducts from "../Products/CategoryProductsList/CategoryProductsList";
import Cart from "../Page/CartPage/CartPage";
import ProductDescription from "../Page/ProductDescriptionPage/ProductDescription";
import Contacts from "../Page/HomePage/Contacts/Contacts";
import HomePage from "../Page/HomePage/HomePage/HomePage";
import Coupon from "../Page/HomePage/Coupon/Coupon";
import NotFoundPage from "../Page/NotFoundPage/NotFoundPage";
import Sale from "../Page/HomePage/Sale/Sale";

export const URL = 'http://localhost:3333'

function App(){
    
    return(
        <div> 
            <div>             
                <Router>
                    <Header/> 
                    <Routes>
                        <Route path="/" element = {<HomePage/>}/>
                            <Route path="/products/all" element = {<Catalog/>}/>
                            <Route path="/categories/all" element = {<Categories/>}/>                        
                            <Route path="/contacts" element = {<Contacts/>}/>
                            <Route path="/cart" element = {<Cart/>}/>
                            <Route path="/coupon" element = {<Coupon/>}/>
                            <Route path="/login" element = {<HomePage/>}/>
                            <Route path="/sale" element = {<Sale/>}/>
                            <Route path="/registrations" element = {<HomePage/>}/>                                                                                
                            <Route path="/products/:id" element = {<ProductDescription/>}/>                  
                            <Route path="/categories/:id" element = {<CategoryProducts/>}/>                                    
                            <Route path="*" element = {<NotFoundPage/>}/>                                                                                                                               
                    </Routes>
                </Router>
                <Footer/> 
            </div>                  
        </div>
    )
}

export default App