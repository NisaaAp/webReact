import React from 'react';
import '../styles/product.scss';
export default class Product extends React.Component{
    render(){
        return(
            <div className='product-section'>
            <div className="header">
                <h1>Product Collection</h1>
                <p>Available in 2022</p>
            </div>
            <div className="look">
                <p>We have 50% off for all collections just take a look and stand out.</p>
            <button>TAKE A LOOK</button>
            </div>
        </div>
        )
    }
}