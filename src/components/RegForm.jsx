import React from "react";
import regBack from '../images/regBack.jpg';
import './regForm.css';
import { NavLink } from "react-router-dom";
function RegForm() {
  return (
    <div className="registration">
    <img src={regBack} className="reg_form"></img>
    <div className="rect">x
            <div className="burtguuleh">
                <p>Бүртгүүлэх</p>
                </div>
            <div className="form">
            <div className="user_name">
                <label>Хэрэглэгчийн нэр</label>
                </div>
            <div className="user_name_button">
                <input className="user_in" type="text"  placeholder="Username" />
                </div>
            <div className="email">
                <label>Цахим шуудан</label>
                </div>
            <div className="email_button">
                <input className="user_in" type="text"  placeholder="****@gmail.com" />
                </div>
             <div className="pass">
                 <label>Нууц үг</label>
                </div>
            <div className="pass_button">
                <input className="user_in" type="password"  placeholder="********" />
             </div>
             </div>
             <div className="burtgel_button">
             <NavLink to="/" className="navlinkStyle"><div><div className='burtgeh4'>Бүртгүүлэх</div></div></NavLink> 
             </div>
            
             </div>
             
            
    </div>
    
  )
}
export default RegForm;
