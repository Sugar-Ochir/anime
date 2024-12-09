import React, {useEffect, useState, useRef} from 'react';
import './header.css';
import pro_zurg from '../images/pro_zurg.png';
import animesListData from '../data/animesListData';
import demonslayer from "../images/demonslayer.png"
import { NavLink } from 'react-router-dom';

function Header({toggleActive, active, setFilteredAnimes}) {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const [open, setOpen] = useState(false);
    const [open1, setOpen2] = useState(false);
    let menuref = useRef();
    let menuref1 = useRef();
    useEffect(()=>{
        let handler =(e)=>{
            if(!menuref1.current.contains(e.target)){
                setOpen2(false);
            }   
        };
        document.addEventListener("mousedown", handler);

        return()=>{
            document.removeEventListener('mousedown', handler);
        }
    });
    useEffect(()=>{
        let handler =(e)=>{
            if(!menuref.current.contains(e.target)){
                setOpen(false);
            }   
        };
        document.addEventListener("mousedown", handler);

        return()=>{
            document.removeEventListener('mousedown', handler);
        }
    });
    
  const handleSearch = (input) => {
    setSearchInput(input);

    const filteredResults = animesListData.filter((anime) =>
    anime.category.toLowerCase().includes(input.toLowerCase()) ||
    anime.img.toLowerCase().includes(input.toLowerCase())
  );
    setFilteredAnimes(filteredResults);
  };
   




  return (
    <header className={`header ${active ? 'active' : undefined}`}>
        <a className="menu" onClick={toggleActive}>
            <i class="bi bi-sliders"></i>
        </a>
        <div className="UserItems">
        <div className='search_bar'>
        <input
          className='search'
          type='text'
          placeholder='Search..'
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        />
        </div>
        <div className='search_icon'>
            <i class="bi bi-search"></i>
            </div>
        <a href="#" className='profile1'>
        <div className={`dropdown ${open? 'active' : 'inactive'}`} ref={menuref}>
        <div className='dropdownrec'>
            <img src={demonslayer} className='demonslayer'></img>
            <img src={pro_zurg} className='dropdownpro'></img>
            <div className='dropdownbutton'>
                <a href="#"><div className='dropdownid'>ID:723381</div></a>
                <a href="#" onClick={()=>{setOpen2(!open1)}}><div className='dropdownprofile'><i class="bi bi-person-circle"></i>Profile</div></a>
                <NavLink to="/"><a href="#"><div className='dropdownlogout'><i class="bi bi-box-arrow-right"></i>Гарах</div></a></NavLink>
            </div>
            <div className='smallrec'>
                <div className='ellipse'><p10>30</p10></div>
                <p11>Эрх авсан хоног</p11>                  
            </div>
            
        </div>
    </div>
    <div className={`dropdown2 ${open1? 'active' : 'inactive'}`} ref={menuref1}>
        <div className='dropdownrec2'>
            <div className="personalInfo">ХУВИЙН МЭДЭЭЛЭЛ</div>
        <img src={pro_zurg} className='dropdownpro2'></img>
        <div className='edit1'>
        <div className='nickname1'>NICKNAME</div>
        <input id='nicknameInput' defaultValue="Kakashi"/>
        </div>
        <div className='edit2'>
        <div className='phoneNumber2'>УТАСНЫ ДУГААР</div>
        <input id='phoneNumberInput' defaultValue="94851608"/>
        </div>
        <div className='edit3'>
            <div className='Gender'>ХҮЙС</div>
            <label>
            <input type="radio" id="option1" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange}
            className="optionsGroup"/>Эмэгтэй</label>
            <label>
            <input type="radio" id="option2" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange}
            className="optionsGroup"/>Эрэгтэй</label>
        </div>
        <div className='edit4'>
        <div className='Age'>НАС</div>
        <input id='ageInput' defaultValue="20"/>
        </div>
        <div className="save"><a>Хадгалах</a></div>

        </div>
    </div>
        <div className='profile' onClick={()=>{setOpen(!open)}}>
            <div class="image" >
            <img src={pro_zurg} className='pro'></img>
            </div>
            <div className="username">
            <p>Kakashi</p>
            <p>ID:723321</p>
            </div>
        </div>
        </a>
        </div>
    </header>
  );
}

export default Header;