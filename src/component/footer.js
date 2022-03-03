import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@material-ui/icons'
import '../styles/footer.scss'

export default class Footer extends React.Component{
    render(){
        return(
            <section className='footer__section'>

            <div className="footer__container">

                        <div className="footer__logo">
                                <h1>NPAshoP</h1>
                                <p>Logo Company</p>
                        </div>


                        <div className="footer__card">
                                <Link to='/'>Gift Cards</Link>
                                <Link to='/'>Shipping</Link>
                                <Link to='/'>Returns</Link>
                                <Link to='/'>Ordering & Payment</Link>
                        </div>



                        <div className="footer__card">
                                <Link to='/'>Contact Us</Link>
                                <Link to='/'>Product Knowledge</Link>
                        </div>



                        <div className="footer__card">
                                <Link to='/'>Privacy Policy</Link>
                                <Link to='/'>Terms & Conditions</Link>
                                <Link to='/'>Accessibility Statement</Link>
                                <Link to='/'>Sitemap</Link>
                        </div>



            </div>

            <div className="footer__icons">
                <Facebook className='footer__icon'/>
                <Instagram className='footer__icon'/>
                <Twitter className='footer__icon'/>
                <YouTube className='footer__icon'/>
                <LinkedIn className='footer__icon'/>
                <Pinterest className='footer__icon'/>
            </div>

        </section>
        )
    }
}