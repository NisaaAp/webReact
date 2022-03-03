import React from "react";
import '../styles/icon.scss';
import question from '../asset/question.png';
import gift from '../asset/gift.png';
import shipped from '../asset/shipped.png';
import pay from '../asset/pay.png';

export default class Icon extends React.Component{
    render(){
        return(
            <section className='main'>
            <div className="center-text">
                {/* <h1>Good Gifts Made Easy</h1> */}
            </div>

        <div className="allExp">
            <div className="exps">
                <div className="icon">
                    <img src={question} alt="" />
                </div>
                <p>FAQ</p>
                
            </div>

            <div className="exps">
                <div className="icon">
                    <img src={gift} alt="" />
                </div>
                <p>Surprise Gift</p>
                
            </div>


            <div className="exps">
                <div className="icon">
                    <img src={shipped} alt="" />
                </div>
                <p>Free Shipping</p>
                <p>( On the first 3 purchases )
                </p>
            </div>



            <div className="exps">
                <div className="icon">
                    <img src={pay} alt="" />
                </div>
                <p>Confirm Payment</p>
                

                </div>

            </div>
        </section>
        )
    }
}