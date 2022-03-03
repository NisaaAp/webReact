import React from 'react';
import '../styles/signup.scss';

export default class Signup extends React.Component{
    render(){
        return(
        <div className='sign-upPage'>
  <form action="" className='signup-form'>
    <label htmlFor="">email</label>
    <input type="text" name="" id="" />
    <label htmlFor="">password</label>
    <input type="password" name="" id="" />
    <label htmlFor="">Phone</label>
    <input type="number" name="" id="" />
    <label htmlFor="">Are you a human ? </label>
    <input type="checkbox" name="" id="" />
    <button>Register</button>
</form>
</div>)
    }
}