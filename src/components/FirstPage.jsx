import React from 'react';
import login1 from '../images/login1.jpg';
import logo from '../images/logo.png';
import './firstpage.css';
import { NavLink } from 'react-router-dom';
function FisrtPage()
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
            <div className='rectangle6'> 
                <div className='logo'>
                    <img src={logo} className='logo6'></img>                    
                </div>                       
                <NavLink to="/Login"><div ><div className='nevtreh'>Нэвтрэх</div></div></NavLink>
                <NavLink to="/Registration"><div ><div className='burtgeh'>Бүртгэх</div></div></NavLink>                        
            </div>
        </div>
    )
}
export default FisrtPage