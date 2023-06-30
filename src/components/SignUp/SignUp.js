import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../contexts/Usercontext';

const SignUp = () => {
    const [error, seterror] = useState(null);
    const {createUser} = useContext(Authcontext);
    const handlesubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if(password.length < 6){
            seterror('Please atleast 6 character password');
            return;
        }
        if(password !== confirm){
            seterror('Your password do not match');
            return;
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>SignUp</h2>
        <form onSubmit={handlesubmit}>
          <div className='form-control'>
            <label htmlFor='email' >Email</label>
            <input type="email" name="email" required/>
          </div>
          <div className='form-control'>
            <label htmlFor='password' >Password</label>
            <input type="password" name="password" required />
          </div>
          <div className='form-control'>
            <label htmlFor='confirm' >Confirm Password</label>
            <input type="password" name="confirm" required />
          </div>
          <input className='btn-submit' type="submit" value="SignUp" />
        </form>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
        <p className='text-error'>{error}</p>
     </div>
    );
};

export default SignUp;