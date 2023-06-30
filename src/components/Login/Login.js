import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../contexts/Usercontext';
const Login = () => {
   const {signIn} = useContext(Authcontext);
   const navigate = useNavigate();
   const location = useLocation();
   let from = location.state?.from?.pathname || '/';

   const handlesubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(error => console.error(error))
   }
    return (
        <div className='form-container'>
        <h2 className='form-title'> Login</h2>
        <form onSubmit={handlesubmit}>
          <div className='form-control'>
            <label htmlFor='email' >Email</label>
            <input type="email" name="email" required/>
          </div>
          <div className='form-control'>
            <label htmlFor='password' >Password</label>
            <input type="password" name="password" required />
          </div>
          <input className='btn-submit' type="submit" value="Login" />
        </form>
        <p>New to ema John? <Link to='/signup'>Create a New account</Link></p>
     </div>
    );
};

export default Login;
