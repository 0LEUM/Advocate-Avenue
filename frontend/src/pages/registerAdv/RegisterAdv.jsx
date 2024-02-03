/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'
import './registerAdv.css'
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RxIdCard } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Register = () => {

    const [form, setForm] = useState({});
    const [advocates, setAdvocates] = useState([]);

    const handleForm = (e) => {
        // console.log(e.target.name);
        setForm({
            ...form,
            [e.target.name] : e.target.value,
            [e.target.phoneNumber] : e.target.value,
            [e.target.password] : e.target.value,
            [e.target.firstName] : e.target.value,
            [e.target.lastName] : e.target.value,
            [e.target.universityName] : e.target.value,
            [e.target.barCouncil] : e.target.value,
            [e.target.regNo] : e.target.value,
            [e.target.dateOfBirth] : e.target.value,
            [e.target.practicingState] : e.target.value,
            [e.target.district] : e.target.value,
        })
        console.log(form);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/Advocate-Avenue',{
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

    const getAdvocates = async () => {
        const response =await fetch('http://localhost:8000/Advocate-Avenue',{
            method:'GET',
        })
        const data = await response.json();
        setAdvocates(data);
    }

    useEffect(()=>{
        getAdvocates();
    },[])
  return (
    <>
    <Header/>
        <div className="main">
            <div className='wrapper'> 
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <hr/>

                    <div className="input-box">  
                        <input type="text" name='email' placeholder="Email" onChange={handleForm} required/>
                        <FaEnvelope className ='icon'/>

                        &emsp;

                        <input type="text" name='phoneNumber' placeholder='Phone No.' onChange={handleForm} required />
                        <FaPhone className ='icon2'/>
                    </div>

                    <div className="input-box">
                        <input type="text" name='password'  placeholder='Password' onChange={handleForm} required />
                        <RiLockPasswordFill className ='icon3'/>
                    </div>

                    <div className="input-box">
                        <input type="text" name='firstName' placeholder='First Name' onChange={handleForm} required />
                        <FaUserAlt className ='icon'/>

                        &emsp;

                        <input type="text" name='lastName' placeholder='Last Name' onChange={handleForm} required />
                        <FaUserAlt className ='icon2'/>
                    </div>

                    <div className="input-box">
                        <input type="text" name='universityName' placeholder='University Name' onChange={handleForm} required />
                        <FaUniversity className ='icon3'/>
                    </div>
            
                    {/* <div>
                        <select id="states">
                            <option selected>Bar Council of ______</option>
                            <option value="1">Bar Council of Andra Pradesh</option>
                            <option value="2">Bar Council of Assam And 4 Other</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Goa">Goa</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Sikkim">Sikkim</option>
                        </select>
                    </div> */}

                    <div className="input-box2">   

                        <input type="text" name='regNo' placeholder='Registration No.' onChange={handleForm} required />
                        <RxIdCard className='icon'/>

                        &emsp;

                        <input type="text" name='dateOfBirth' placeholder='dd-mm-yyyy' onChange={handleForm} required />
                        <IoCalendarNumberOutline className='icon3' />

                    </div>


                    <div className='input-box4'>

                        <input type="text" name='practicingState' placeholder='Practicing State' onChange={handleForm} required />

                        &emsp;

                        <input type="text" name='district' placeholder='District' onChange={handleForm} required />
         
                    </div>


                    {/* const [inputValue, setInputValue] = useState('');
                    const onInputChange = (e) => {
                            setInputValue(e.target.value);
                    }
                    <div className="dropdown">
                        <div className="input-dropdown">
                            <input type="text" value={inputValue}
                            placeholder={placeholder}
                            onChange={onInputChange}/>
                        </div>

                        <div className ="input-arrow-container">
                            <i className="input-arrow"
                        </div>
                    </div> */}


                    <div className='input-box3'>
                        <div className="Terms-condi">
                            <label><input type="checkbox" required/> I agree to the terms & condition</label>
                        </div>

                        <div className="News">
                            <label><input type="checkbox"/> Subscribe to our news letter</label>
                        </div>
                    </div>

                    <button type='submit' className='button-adv'><b> Register </b></button>

                    <div className='Log'>
                    <p> Already Registered? <Link to='/login'>Log In</Link></p> 
                    <p><Link to='/register'>Register</Link> as a Customer </p>
                    </div>

                </form>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Register