// eslint-disable-next-line no-unused-vars
import './login.css'
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Login = () => {

    
  return (
    <>
    <Header/>
        <div className="main-3">
            <div className='wrapper2'>
                <form >
                    <h1>Login</h1>
                    <hr />
                    <div className="input-box7">
                        <input type="text" name='name' placeholder='Username' required />
                        <FaUserAlt className='icon' />
                    </div>
                    <div className="input-box7">
                        <input type="text" placeholder='Password' name='pass' required />
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