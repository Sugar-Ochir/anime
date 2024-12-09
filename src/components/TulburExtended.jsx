import React from 'react';
import logo1 from '../images/logo1.png';
import './tulburextended.css';
import { NavLink } from 'react-router-dom';
function TulburExtended({active}) {
  return (
    <div className={`tulbur ${active ? 'active' : undefined}`}>
      <div className='rectangle1'>
          <h1 className='une'>
            <span>5000</span>
            <img src={logo1} ></img>
          </h1>
          <h4>1сар</h4>
          <div className='divider'></div>
          <ul className='detail'>
            <li><i class="bi bi-check2-square"></i>Албан ёсны эрхтэй</li>
            <li><i class="bi bi-check2-square"></i>Чанартай контент</li>
            <li><i class="bi bi-check2-square"></i>Цаг алдахгүй</li>
            <li><i class="bi bi-check2-square"></i>Өргөн сонголттой</li>
            <li><i class="bi bi-check2-square"></i>Шинэ үзвэр</li>
          </ul>
          <NavLink to="/DansInfo"><button type="Submit" className='button1'>Эрх авах</button></NavLink>
        </div>
        <div className='rectangle2'>
          <h1 className='une'>
            <span>10000</span>
            <img src={logo1} ></img>
          </h1>
          <h4>2сар</h4>
          <div className='divider'></div>
          <ul className='detail'>
            <li><i class="bi bi-check2-square"></i>Албан ёсны эрхтэй</li>
            <li><i class="bi bi-check2-square"></i>Чанартай контент</li>
            <li><i class="bi bi-check2-square"></i>Цаг алдахгүй</li>
            <li><i class="bi bi-check2-square"></i>Өргөн сонголттой</li>
            <li><i class="bi bi-check2-square"></i>Шинэ үзвэр</li>
          </ul>
          <NavLink to="/DansInfo"><button type="Submit" className='button2'>Эрх авах</button></NavLink>
        </div>   
        <div className='rectangle3'>
          <h1 className='une'>
            <span>13000</span>
            <img src={logo1} ></img>
          </h1> 
          <h4>3сар</h4>
          <div className='divider'></div>
          <ul className='detail'>
            <li><i class="bi bi-check2-square"></i>Албан ёсны эрхтэй</li>
            <li><i class="bi bi-check2-square"></i>Чанартай контент</li>
            <li><i class="bi bi-check2-square"></i>Цаг алдахгүй</li>
            <li><i class="bi bi-check2-square"></i>Өргөн сонголттой</li>
            <li><i class="bi bi-check2-square"></i>Шинэ үзвэр</li>
          </ul>
          <NavLink to="/DansInfo"><button type="Submit" className='button3'>Эрх авах</button></NavLink>
        </div>    
        <div className='rectangle4'>
          <h1 className='une'>
            <span>25000</span>
            <img src={logo1} ></img>
          </h1> 
          <h4>6сар</h4>
          <div className='divider'></div>
          <ul className='detail'>
            <li><i class="bi bi-check2-square"></i>Албан ёсны эрхтэй</li>
            <li><i class="bi bi-check2-square"></i>Чанартай контент</li>
            <li><i class="bi bi-check2-square"></i>Цаг алдахгүй</li>
            <li><i class="bi bi-check2-square"></i>Өргөн сонголттой</li>
            <li><i class="bi bi-check2-square"></i>Шинэ үзвэр</li>
          </ul>
          <NavLink to="/DansInfo"><button type="Submit" className='button4  '>Эрх авах</button></NavLink>
        </div>
        <div className='rectangle5'>
          <h1 className='une'>
            <span>50000</span>
            <img src={logo1} ></img>
          </h1> 
          <h4>1жил</h4>
          <div className='divider'></div>
          <ul className='detail'>
            <li><i class="bi bi-check2-square"></i>Албан ёсны эрхтэй</li>
            <li><i class="bi bi-check2-square"></i>Чанартай контент</li>
            <li><i class="bi bi-check2-square"></i>Цаг алдахгүй</li>
            <li><i class="bi bi-check2-square"></i>Өргөн сонголттой</li>
            <li><i class="bi bi-check2-square"></i>Шинэ үзвэр</li>
          </ul>
          <NavLink to="/DansInfo"><button type="Submit" className='button5'>Эрх авах</button></NavLink>
        </div>     
    </div>   
  );
}

export default TulburExtended