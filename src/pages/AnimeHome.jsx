import React, {useState} from 'react';
import './animeHome.css';
import kakashi from '../images/kakashi.jpg';
import undead from '../images/undead.jpg';
import suit_busgui from '../images/suit_busgui.jpg'; 
import goblin from '../images/goblin.jpg';
import bambait from '../images/bambait.jpg';
import munh from '../images/munh.jpg';
import harshidiindain from '../images/harshidiindain.jpg';
import spy from '../images/spy.jpg';
import nuutslagdmal from '../images/nuutslagdmal.jpg';
import hulegbaatar from '../images/hulegbaatar.jpg';
import tokyo from '../images/tokyo.jpg';
import naizohiduud from '../images/naizohiduud.jpg';
import naizohin from '../images/naizohin.jpg';
import hovdogmangas from '../images/hovdogmangas.jpg';
import smartphone from '../images/smartphone.png';
import uuryrtunts from '../images/uuryrtunts.jpg';
import mashie from '../images/mashie.jpeg';
import baavgai from '../images/baavgai.jpg';
import konosuba from '../images/konosuba.jpg';
import kimetsu from '../images/kimetsu.jpg';
import myhero from '../images/myhero.jpg';
import delhiigavrahbolson from '../images/delhiigavrahbolson.jpg';
import spyfamily from '../images/spyfamily.jpg';
import bluelock from '../images/bluelock.jpg';
import chainsaw from '../images/chainsaw.jpg';
import turshlaga from '../images/turshlaga.jpg';
import hutuuchnohoi from '../images/hutuchnohoi.jpg';
import horimiya from '../images/horimiya.jpg';
import masamune from '../images/masamune.jpg';
import tureesiin_naiz_ohin from '../images/tureesiin_naiz_ohin.jpg';
import tunnel from '../images/tunnel.jpg';
import reborn from '../images/reborn.jpg';
import dahintursun from '../images/dahintursun.jpg';
import taivanamidral from '../images/taivanamidral.jpg';
import demonking from '../images/demonking.jpg';
import chillamidral from '../images/chillamidral.jpg';
import shidiinhuvisal from '../images/shidiinhuvisal.jpg';
import ballbaster from '../images/ballbaster.jpg';
import Fate from '../images/Fate.jpeg';
import league from '../images/league.jpg';
import Angarag from '../images/Angarag.jpg';
import fullmetal from '../images/fullmetal.jpg';
import mobile from '../images/mobile.jpg';

import AnimeDesc from '../components/AnimeDesc/AnimeDesc';
import animesListData from '../data/animesListData';
import { NavLink } from 'react-router-dom';
function AnimeHome({active, animes, filteredAnimes = []}) {
    const [open, setOpen] = useState(null);
    const FilteredAnimes1 = filteredAnimes && filteredAnimes.length > 0 ? filteredAnimes.slice(0, 6) : [];
    const FilteredAnimes2 = filteredAnimes && filteredAnimes.length > 0 ? filteredAnimes.slice(6, 12) : [];
    const FilteredAnimes3 = filteredAnimes && filteredAnimes.length > 0 ? filteredAnimes.slice(12, 18) : [];
    const FilteredAnimes4 = filteredAnimes && filteredAnimes.length > 0 ? filteredAnimes.slice(18, 24) : [];
    const FilteredAnimes5 = filteredAnimes && filteredAnimes.length > 0 ? filteredAnimes.slice(36, 42) : [];
    const FilteredAnimes6 = filteredAnimes && filteredAnimes.length > 0 ? filteredAnimes.slice(43, 49) : [];
    const FilteredAnimes7 = filteredAnimes && filteredAnimes.length > 0 ? filteredAnimes.slice(55, 61) : [];
    const setOpenanime = (anime) => {
        setOpen(anime);
      };
    
  return (
    <div className={`animeHome ${active ? 'active' : undefined}`}>
    <img src={kakashi} className='kakashi'></img>
    <div className="type">
        <p>Шинээр нэмэгдсэн</p>
        <div className='all'>
        <NavLink to ="/categories"><a href="#">Бүгд</a></NavLink>
        <i class="bi bi-arrow-right"></i>
        </div>
    </div>
        <ul className='anime1'>
        {FilteredAnimes1.map((anime) => (
          <li key={anime._id}>
            <img src={anime.img} alt={anime.category} onClick={() => setOpenanime(anime)} />
          </li>
        ))}
        </ul>
        
    <div className="type">
        <p>Энэ улиралд</p>
        <div className='all'>
        <NavLink to ="/categories"><a href="#">Бүгд</a></NavLink>
        <i class="bi bi-arrow-right"></i>
        </div>
    </div>
    <ul className='anime1'>
        {FilteredAnimes2.map((anime) => (
          <li key={anime._id}>
            <img src={anime.img} alt={anime.category} onClick={() => setOpenanime(anime)} />
          </li>
        ))}
        </ul>
        
        <div className="type">
        <p>Өөр ертөнцөд өрнөдөг</p>
        <div className='all'>
        <NavLink to ="/categories"><a href="#">Бүгд</a></NavLink>
        <i class="bi bi-arrow-right"></i>
        </div>
    </div>
    <ul className='anime1'>
        {FilteredAnimes3.map((anime) => (
          <li key={anime._id}>
            <img src={anime.img} alt={anime.category} onClick={() => setOpenanime(anime)} />
          </li>
        ))}
        </ul>
        
    <div className="type">
        <p>Онцлох</p>
        <div className='all'>
        <NavLink to ="/categories"><a href="#">Бүгд</a></NavLink>
        <i class="bi bi-arrow-right"></i>
        </div>
    </div>
    <ul className='anime1'>
        {FilteredAnimes4.map((anime) => (
          <li key={anime._id}>
            <img src={anime.img} alt={anime.category} onClick={() => setOpenanime(anime)} />
          </li>
        ))}
        </ul>
        
    <div className="type">
        <p>Хайр дурлал, романс</p>
        <div className='all'>
        <NavLink to ="/categories"><a href="#">Бүгд</a></NavLink>
        <i class="bi bi-arrow-right"></i>
        </div>
    </div>
    <ul className='anime1'>
        {FilteredAnimes5.map((anime) => (
          <li key={anime._id}>
            <img src={anime.img} alt={anime.category} onClick={() => setOpenanime(anime)} />
          </li>
        ))}
        </ul>
     
    <div className="type">
        <p>Дахин төрөлт</p>
        <div className='all'>
        <NavLink to ="/categories"><a href="#">Бүгд</a></NavLink>
        <i class="bi bi-arrow-right"></i>
        </div>
    </div>
    <ul className='anime1'>
        {FilteredAnimes6.map((anime) => (
          <li key={anime._id}>
            <img src={anime.img} alt={anime.category} onClick={() => setOpenanime(anime)} />
          </li>
        ))}
        </ul>

    <div className="type">
        <p>Цэрэг арми</p>
        <div className='all'>
        <NavLink to ="/categories"><a href="#">Бүгд</a></NavLink>
        <i class="bi bi-arrow-right"></i>
        </div>
    </div>
    <ul className='anime1'>
        {FilteredAnimes7.map((anime) => (
          <li key={anime._id}>
            <img src={anime.img} alt={anime.category} onClick={() => setOpenanime(anime)} />
          </li>
        ))}
        </ul>
        <AnimeDesc open={open} setOpen={setOpen} />
    
    </div>
  );
}

export default AnimeHome