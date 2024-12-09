import React,{useState} from "react";
import regBack from '../images/regBack.jpg';
import './forgotpassword.css'
import { NavLink } from "react-router-dom";
function ForgotPassword () {
  return (
    <div className="registration">
    <img src={regBack} className="reg_form"></img>
    <div className="rect">
            <div className="forget_pass">
                <p>Нууц үг сэргээх</p>
                </div>
                <div className="Tailbar">
                <p>Өөрийн бүртгэлтэй утасны дугаараа </p>
                <p>оруулж баталгаажуулах код авна уу?</p>
                </div>
                <div className="UtasDugaar">
                <input className="dugaar_1" type="text" placeholder=" *"/>
                <input className="dugaar_2" type="text" placeholder=" *"/>
                <input className="dugaar_3" type="text" placeholder=" *"/>
                <input className="dugaar_4" type="text" placeholder=" *"/>
                <input className="dugaar_5" type="text" placeholder=" *"/>
                <input className="dugaar_6" type="text" placeholder=" *"/>
                <input className="dugaar_7" type="text" placeholder=" *"/>
                <input className="dugaar_8" type="text" placeholder=" *"/>
                </div>
             <div className="forget_pass_button">
             <NavLink to="/EnterCode" className="navlinkStyle"><div><div className='burtgeh5'>Код авах</div></div></NavLink>
             </div>
             </div>
    </div>
    
  )
}
export default ForgotPassword;