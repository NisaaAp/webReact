import React from "react";
import '../styles/section.scss';

export default class Section extends React.Component{
    render(){
        return(
            <section className='main-section'>

            <div className="content">
                <h1>Born To Be The Best.</h1>
                <button>Learn More</button>
            </div>
            <div className="bottom-c">
                <h2>10% off for all products</h2>
            </div>

        </section>

        )
    }
}