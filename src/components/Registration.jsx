import React,{useState} from "react";
import regBack from '../images/regBack.jpg';
import './registration.css';
import { NavLink } from 'react-router-dom';
function Registration () {
  return (
    <div className="registration">
    <img src={regBack} className="regForm"></img>
    <div className="regRect">
            <div className="forgetPass">
                <p>Утасны дугаар оруулах</p>
                </div>
                <div className="Tailbar">
                <p>Цаашид нэвтрэхдээ ашиглах утасны </p>
                <p>дугаараа оруулж баталгаажуулна уу?</p>
                </div>
                <div className="UtasDugaar">
                <input className="newdugaar1" type="text" maxlength="1" placeholder=" *"/>
                <input className="newdugaar2" type="text" maxlength="1" placeholder=" *"/>
                <input className="newdugaar3" type="text" maxlength="1" placeholder=" *"/>
                <input className="newdugaar4" type="text" maxlength="1" placeholder=" *"/>
                <input className="newdugaar5" type="text" maxlength="1" placeholder=" *"/>
                <input className="newdugaar6" type="text" maxlength="1" placeholder=" *"/>
                <input className="newdugaar7" type="text" maxlength="1" placeholder=" *"/>
                <input className="newdugaar8" type="text" maxlength="1" placeholder=" *"/>
                </div>
             <div className="forgetPassButton">
             <NavLink to="/Verify" className="navlinkStyle"><div><div className='burtgeh2'>Баталгаажуулах</div></div></NavLink> 
             </div>
             </div>
    </div>
    
  )
}
export default Registration;