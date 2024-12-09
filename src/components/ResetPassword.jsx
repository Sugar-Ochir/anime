import React,{useState} from "react";
import regBack from '../images/regBack.jpg';
import './resetpassword.css'
import { NavLink } from "react-router-dom";
function ResetPassword () {
  return (
    <div className="registration">
    <img src={regBack} className="reg_form"></img>
    <div className="rect">
        
            <div className="forget_pass">
                <p>Нууц үг сэргээх</p>
                </div>
            <div className="form">
            <div className="new_pass">
                <label>Шинэ нууц үгээ оруулна уу.</label>
                </div>
            <div className="new_pass_button">
                <input className="user_in" type="text"/>
                </div>

            <div className="new_pass2">
                <label>Нууц үгээ дахин оруулна уу. </label>
                </div>
            <div className="new_pass2_button">
                <input className="user_in" type="text"/>
                </div>
                </div>
             <div className="forget_pass_button">
             <NavLink to="/" className="navlinkStyle"><div><div className='burtgeh6'>Нууц үг сэргээх</div></div></NavLink>
             </div>
             </div>
    </div>
    
  )
}
export default ResetPassword;