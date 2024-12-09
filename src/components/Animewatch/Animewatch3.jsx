import React from 'react'
import ReactPlayer from "react-player"
import './animewatch.css'
import undead from '../../images/undead.jpg';
import { NavLink } from 'react-router-dom'

function Animewatch3() {
  return (
    <div>
    <NavLink to="/Home"><header><i class="bi bi-arrow-left bi-arrow-left1" ></i></header></NavLink>
    <div className='video1'>
    <ReactPlayer
    url="https://balu0816.wistia.com/medias/gvx6c7x9e5"
    width="69%"
    height="70%"
    controls={true}
        style={{ position: 'fixed', top: 50, left:0}}
    config={{
        wistia: {
          options: {
            videoFoam: true,
           
            title: 'Your Video Title Here',
          },
        },
      }}/></div>
    <div className='aniwatchrec1'>
    <div className='animeabout'>
    <i class="bi bi-list-ul"></i>
    <NavLink to="/Animewatch3/Animewatchabout3"><i class="bi bi-info-circle"></i></NavLink>
    <div className='activeline1'></div>
    </div>
        <div className='aniwatchimg1'><img src={undead} alt='undead'></img></div>
        <div className='epsdate'>
        <p className='eps'>Ангиуд 1-12</p>
        <p className='animedate'>2023-10-28</p>
        </div>
        <div className='aniwatchdivider'></div>
        <div className='epbutton1'>
        <ul>
            <NavLink to="/Animewatch"><li><a>1</a></li></NavLink>
            <NavLink to="/Animewatch2"><li><a>2</a></li></NavLink>
            <NavLink to="/Animewatch3"><li className='ep1'><a>3</a></li></NavLink>
            <li><a>4</a></li>
        </ul>
        </div>
        <div className='epbutton1'>
        <ul>
            <li><a>5</a></li>
            <li><a>6</a></li>
            <li><a>7</a></li>
            <li><a>8</a></li>
        </ul>
        </div>
        <div className='epbutton1'>
        <ul>
            <li><a>9</a></li>
            <li><a>10</a></li>
            <li><a>11</a></li>
            <li><a>12</a></li>
        </ul>
        </div>

    </div>


      <footer></footer>
      </div>
  )
}

export default Animewatch3