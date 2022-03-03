import React from "react";
import '../styles/gallery.scss';


export default class Gallery extends React.Component{
    render(){
        return(
            
            <section className='second-section'>
                <h2> xxx    What is NPAshoP ?     xxx </h2>
                <p > Provide Products with Designed For ANYONE, ANYWHERE, ANYTIME
                </p>
                <br /><br /><br /><br />
                <br />
                <br />
            <div className="allcart">
                
            <div className="cart">
                    <img src="https://i.pinimg.com/564x/81/60/03/8160038f95c8c4b09949246aac5a14a6.jpg" alt="" />
                    <p>Men</p>
                    
            </div>
            <div className="cart">
                    <img src="https://i.pinimg.com/564x/0b/44/db/0b44db907d6cff7af22ea926aa935264.jpg" alt="" />
                    <p>Woman</p>
                   
            </div>

            <div className="cart">
                    <img src="https://i.pinimg.com/564x/13/09/d5/1309d5cdeb9691eb7bf69752399b5785.jpg" alt="" />
                    <p>Unisex</p>
                    
            </div>

            <div className="cart">
                    <img src="https://i.pinimg.com/564x/1f/68/33/1f6833a514019b89fc3085d76edf9fb8.jpg" alt="" />
                    <p>Formal</p>
                  
            </div>
            </div>
            </section>
        )
    }
}