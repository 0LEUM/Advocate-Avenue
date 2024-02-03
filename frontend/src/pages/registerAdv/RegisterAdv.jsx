// eslint-disable-next-line no-unused-vars
import React from 'react'
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
  return (
    <>
    <Header/>
        <div className="main">
            <div className='wrapper'> 
                <form action="">
                    <h1>Register</h1>
                    <hr/>

                    <div className="input-box">  
                        <input type="text" name='email' placeholder="Email" required/>
                        <FaEnvelope className ='icon'/>

                        &emsp;

                        <input type="text" name='num' placeholder='Phone No.' required />
                        <FaPhone className ='icon2'/>
                    </div>

                    <div className="input-box">
                        <input type="text" name='pass'  placeholder='Password' required />
                        <RiLockPasswordFill className ='icon3'/>
                    </div>

                    <div className="input-box">
                        <input type="text" name='fname' placeholder='First Name' required />
                        <FaUserAlt className ='icon'/>

                        &emsp;

                        <input type="text" name='lanme' placeholder='Last Name' required />
                        <FaUserAlt className ='icon2'/>
                    </div>

                    <div className="input-box">
                        <input type="text" name='uname' placeholder='University Name' required />
                        <FaUniversity className ='icon3'/>
                    </div>
            
                    <div>
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
                    </div>

                    <div className="input-box2">   

                        <input type="text" name='reg-num' placeholder='Registration No.' required />
                        <RxIdCard className='icon'/>

                        &emsp;

                        <input type="text" name='date' placeholder='dd-mm-yyyy' required />
                        <IoCalendarNumberOutline className='icon3' />

                    </div>


                    <div className='input-box4'>

                        <input type="text" name='state' placeholder='Practicing State' required />

                        &emsp;

                        <input type="text" name='district' placeholder='District' required />
         
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