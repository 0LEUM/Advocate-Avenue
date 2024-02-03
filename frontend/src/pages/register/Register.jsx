/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect, useState } from 'react'

import './register.css'
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMailUnread } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Register = () => {

    const [form, setForm] = useState({});
    const [users, setUsers] = useState([]);

    const handleForm = (e) => {
        // console.log(e.target.name);
        setForm({
            ...form,
            [e.target.name] : e.target.value,
            [e.target.password] : e.target.value,
            [e.target.firstName] : e.target.value,
            [e.target.lastName] : e.target.value,
            [e.target.phoneNumber] : e.target.value,
        })
        console.log(form);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/User-Avenue',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data =await response.json();
        console.log(data);

        if(response.ok){
            alert('Registered Successfully!')
        }
        else{
            alert('Registration Failed. Please Try Again.')
        }
    }

    const getUsers = async () => {
        const response =await fetch('http://localhost:8000/User-Avenue',{
            method:'GET',
        })
        const data = await response.json();
        setUsers(data);
    }

    useEffect(()=>{
        getUsers();
    },[])

  return (
    <>
    <Header/>
        <div className="main2">
            <div className='wrapper1'> 
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <hr/>

                    <div className="input-box5">
                        <input type="text" placeholder='Email' name='email' onChange={handleForm} required />
                        <IoMailUnread className ="icon"/>
                    </div>

                    <div className="input-box5">
                        <input type="text" placeholder='Password' name='password' onChange={handleForm} required />
                        <RiLockPasswordFill className ='icon'/>
                        
                    </div>

                    <div className="input-box5">
                        <input type="text" placeholder='First Name' name='firstName' onChange={handleForm} required />
                        <FaUserAlt className ='icon'/>
                    </div>

                    <div className="input-box5">
                        <input type="text" placeholder='Last Name' name='lastName' onChange={handleForm} required />
                        <FaUserAlt className ='icon'/>
                    </div>

                    <div className="input-box5">
                        <input type="text" placeholder='Phone Number' name='phoneNumber' onChange={handleForm} required />
                        <FaPhone className ='icon'/>
                    </div>

                    <div className="Terms-condi1">
                        <label><input type="checkbox" required/> I agree to the terms & condition</label>
                    </div>

                    <div className="News1">
                        <label><input type="checkbox"/> Subscribe to our news letter</label>
                    </div>

                    <button type='submit' className='button1'> Register </button>

                    <div className='Log1'>
                    <p> Already Registered? <Link to='/login'>Log In</Link></p> 
                    <p><Link to='/registeradv'>Register</Link> as an Advocate </p>
                    </div>

                </form>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Register