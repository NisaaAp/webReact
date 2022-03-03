import React from 'react';
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import '../styles/contact.css'


export default class Contact extends React.Component{
    render(){
        return(
            <div className='contact'>
            <Link to='/' className='a-icon'><ArrowBack className='icon'/></Link>    
    
                <div className="input__container">
    
                        <input type="text" placeholder='Name'/>
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Message'/>
                        
                        <button type='submit'>Send</button>
    
                </div>
    
    
            </div>
        )
    }
}