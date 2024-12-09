import React from "react";
import regBack from '../images/regBack.jpg';
import './entercode.css'
import { NavLink } from "react-router-dom";
function EnterCode () {
  return (
    <div className="registration">
    <img src={regBack} className="reg_form"></img>
    <div className="rect">
            <div className="forget_pass">
                <p>Нууц үг сэргээх</p>
                </div>
                <div className="Tailbar">
                <p>XXXX-XXXX дугаарт ирсэн </p>
                <p>баталгаажуулах кодыг оруулна уу.</p>
                </div>
                <div className="Code">
                <input className="code_1" type="text" placeholder=" *"/>
                <input className="code_2" type="text" placeholder=" *"/>
                <input className="code_3" type="text" placeholder=" *"/>
                <input className="code_4" type="text" placeholder=" *"/>
                <input className="code_5" type="text" placeholder=" *"/>
                <input className="code_6" type="text" placeholder=" *"/>
                </div>
             <div className="forget_pass_button">
             <NavLink to="/ResetPassword" className="navlinkStyle"><div><div className='burtgeh5'>Нууц үг сэргээх</div></div></NavLink>
             </div>
             </div>
    </div>
    
  )
}
export default EnterCode;