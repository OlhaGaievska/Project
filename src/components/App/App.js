import React from "react";
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";
import './App.css'
import './Media.css'

import Basket from "../Basket/Basket";
import Catalog from "../Catalog/Catalog";
import Categories from "../Categories/Categories";
import Contacts from "../Contacts/Contacts";
import Home from "../Home/Home";
import Not_Found from "../Not_Found/Not_Found";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import OneProduct from "../OneProduct/OneProduct";

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
                            <Route path="/basket" element = {<Basket/>}/>
                            <Route path="/products/:id" element = {<OneProduct/>}/>                  
                            <Route path="/categories/:id" element = {<CategoryProducts/>}/>                                    
                            <Route path="*" element = {<Not_Found/>}/>                                            
                    </Routes>
                </Router>
                <Footer/> 
            </div>        
        </div>
    )
}

export default App