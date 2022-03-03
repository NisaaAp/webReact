import React from 'react';
import '../styles/login.scss';

export default class Login extends React.Component{
    render(){
        return(
            <div className='forms'>
            <form action="" className='form'>
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" placeholder='email'/>
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" placeholder='password'/>
                <button type='submit'>Next</button>
            </form>
        </div>
        )
    }
}