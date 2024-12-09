import React from 'react';
import login1 from '../images/login1.jpg';
import logo from '../images/logo.png';
import './login.css';
import { NavLink } from 'react-router-dom';
function Login()
{
    return (
        <div className='login'>
            <div className='rectangle'>
            <img src={login1} className='login1'></img>
            </div>
            <div className="welcome">
                <h1>Манай сайтд тавтай морилно уу.</h1>
            </div>
            <div className="bichwer">
                <p>Дэлхийн хаанаас ч хүссэн аниме аа цаг алдалгүй үзээрэй.</p> 
            </div>  
            <div className='rectangle7'> 
                <div className='logo'>
                    <img src={logo} className='logo5'></img>                    
                </div>  
                
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <div className="input">   
                    <span className = "Utas_dugaar" maxlength="8">Утасны дугаар</span>
                    <input className='phone' type='text' name='phone' placeholder='XXXX-XXXX'></input>
                    <span className = "Nuuts_vg" >Нууц үг</span>
                    <input className='password' type='password' name='password' placeholder='********'></input> 
                    <div className='forgot_password'>
                    <NavLink to="/ForgotPassword"><div ><div className='forgot'>Нууц үгээ мартсан</div></div></NavLink> 
                    </div>  
                </div>  
                <NavLink to="/Home"><div ><div className='nevtreh1'>Нэвтрэх</div></div></NavLink>                         
            </div>
        </div>
    )
}
export default Login