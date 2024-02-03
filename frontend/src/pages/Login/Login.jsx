// eslint-disable-next-line no-unused-vars
import './login.css'
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react';



const Login = () => {
    const [form, setForm] = useState({email: '', password: ''});
    // const [users, setUsers] = useState([]);

    const handleForm = (e) => {
    // console.log(e.target.name);
    setForm({
        ...form,
        [e.target.name] : e.target.value,
    })
    console.log(form);
}
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password,
            }),
            
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login Sucessful')
            // Redirect or perform actions after successful login
        } else {
            console.error('Login failed:', data.message);
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
    }
};




    
  return (
    <>
    <Header/>
        <div className="main-3">
            <div className='wrapper2'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <hr />
                    <div className="input-box7">
                        <input type="text" name='email' placeholder='Email' onChange={handleForm} required />
                        <FaUserAlt className='icon' />
                    </div>
                    <div className="input-box7">
                        <input type="text" placeholder='Password' name='password' onChange={handleForm} required />
                        <RiLockPasswordFill className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className='button2'>Login</button>
                    <br /><br />
                    <div className="register-link">
                        <p><center>Dont have an account? <Link to='/register'>Register</Link></center></p>
                    </div>
                </form>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Login