import React,{useState} from "react";
import regBack from '../images/regBack.jpg';
import './verify.css';
import { NavLink } from "react-router-dom";

function Verify () {
  return (
    <div className="registration">
    <img src={regBack} className="reg_form"></img>
    <div className="rect">
            <div className="forget_pass">
                <p>Баталгаажуулах</p>
                </div>
                <div className="TailBar">
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
             <NavLink to="/RegForm" className="navlinkStyle"><div><div className='burtgeh3'>Баталгаажуулах</div></div></NavLink> 
             </div>
             </div>
    </div>
    
  )
}
export default Verify;
