import React from 'react';
import './dans.css';
import { NavLink } from 'react-router-dom';

function Dans() {
  return (
    <div className='Dans'>
        <div className="rect1">
        <NavLink to="/Wallet"><i class="bi bi-arrow-left"></i></NavLink>
            <div className="dans_info">
                <p>Дансны мэдээлэл</p>
            </div>
            <div className='first'>
            <div className="bank_label">
                <p>Шилжүүлэх банк</p>
            </div>
            <div className="bank_label_name">
                <p>Хаан банк</p>
            </div>
            </div>
            <div className="divide1">
            </div>
            <div className='second'>
            <div className="dansno_label">
                <p>Дансны дугаар</p>
            </div>
            <div className="dansno_label_name">
                <p>5959253693</p>
            </div>
            </div>
            <div className="divide2">
            </div>
            <div className='third'>
            <div className="ezemshigch_label">
                <p>Данс эзэмшигч</p>
            </div>
            <div className="ezemshigch_label_name">
                <p>Баяр-Эрдэнэ</p>
            </div>
            </div>
            <div className="divide3">
            </div>
            <div className='fourth'>
            <div className="utga_label">
                <p>Гүйлгээний утга</p>
            </div>
            <div className="utga_label_name">
                <p>723381</p>
            </div>
            </div>
            <div className="divide4">
            </div>
            </div>
    </div>
)}

export default Dans