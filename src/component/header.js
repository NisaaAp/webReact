import React from "react";
import {  SearchOutlined, ShoppingBasket } from "@material-ui/icons";
// import logo from "./asset/logo.png";
import { Link } from "react-router-dom";
// import logo from '../asset/logo.png';
import '../styles/Header.scss'

export default class Header extends React.Component{
    render(){
        return(
            <div className='header'>
            <nav>
                
                    <ul className='ul-items'>
                        <li className='li-items'>
                        <Link to='/'>Home</Link>  
                        <Link to='/product'>Product</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/shop' className='orange'>The Gift Shop</Link>
                        
                        </li>
                    </ul>
                    <div className="logo">
                        <h1>NPAshoP</h1>
                        {/* <img src={logo} alt="logo" /> */}
                    </div>
                    <div className="right">
                            <div className="search">
                                <SearchOutlined className='search-icon'/>    
                                <button className='sch-btn'>Search</button>            
                            </div> 
                            <div className="right-buttons">
                            <button>
                                <Link to='/login'>Log In</Link>
                            </button>
                            <button>
                                <Link to='/signup'>
                                    Sign Up
                                </Link>
                            </button>
                            <ShoppingBasket className='basket'/>
                            </div>                       
                </div>
                </nav>
            </div>


        )
    }

}