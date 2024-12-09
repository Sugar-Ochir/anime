
import React, { useState, useEffect, useRef } from 'react';
import undead from '../../images/undead.jpg';
import './animeDesc.css';
import { NavLink } from 'react-router-dom';
import { useAnimeContext } from '../../pages/AnimeContext';

function AnimeDesc({ open, setOpen }) {
  const { animeInfo, setAnimeInfoData } = useAnimeContext();
  let menuref = useRef();

  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [, setImageSource] = useState(null); // Add state for image source

  useEffect(() => {
    // Retrieve the clicked state from localStorage
    const storedClickedState = localStorage.getItem('isHeartClicked');
    // Set the initial state based on whether the anime is in the favorite list, the stored state, or false
    setIsHeartClicked(animeInfo !== null || storedClickedState === 'true' || false);
  
    // Log the state to check its value
    console.log('Initial Heart Clicked:', animeInfo !== null, storedClickedState === 'true');
  }, [animeInfo]);
  

  const handleAddToFavorites = () => {
    const localStorageKey = 'isHeartClicked';

    if (isHeartClicked) {
      // Remove anime from the favorite list
      setAnimeInfoData(null);
      // Reset the clicked state
      setIsHeartClicked(false);
      // Remove the clicked state from localStorage
      localStorage.removeItem(localStorageKey);
    } else {
      // Add anime to the favorite list
      const animeInfo = {
        title: 'UNDEAD UNLUCK', // Replace with the actual title
        image: undead, // Assuming you have the image source
      };
      setAnimeInfoData(animeInfo);
      setIsHeartClicked(true);
      // Save the clicked state to localStorage
      localStorage.setItem(localStorageKey, 'true');
    }
  };
  useEffect(() => {
    const storedClickedState = localStorage.getItem('isHeartClicked');
    setIsHeartClicked(animeInfo !== null || storedClickedState === 'true' || false);
  }, [animeInfo]);
  
  useEffect(() => {
    let handler = (e) => {
      if (menuref.current && !menuref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [open, setOpen]);

  if (!open) {
    return null; // or render a placeholder, depending on your use case
  }

  // Destructure properties from 'open' safely
  const { img, title } = open;

  return (
    <div className={`animeDesc ${open ? 'active' : 'inactive'}`} ref={menuref}>
      <div className='descrec1'>
        <div className='animedesc1'>
        {img && <img src={img} alt={title} />}
        </div>
        <div className='gradient1'>
          <NavLink to='/Animewatch'>
            <i className='bi bi-play-circle-fill'></i>
          </NavLink>
          <div className={`ellipseheart ${isHeartClicked ? 'clicked' : ''}`} onClick={handleAddToFavorites}>
            <i className={`bi bi-heart bi-heart1 ${isHeartClicked ? 'clicked' : ''}`}></i>
          </div>
          <i className='bi bi-star-fill'></i>
          <p20>0/10</p20>
          <p21>{open.title}</p21>
          <div className='description1'>
            <p22>
            Хүрсэн хүнээ золгүй болгодгоосоо болж энгийн амьдралаар амьдарч 
              чадахгүй болсон охин Изүмо Фүко. Өөрийн дуртай мангагаа уншиж дуусгаад 
              амиа хорлохоор шийдсэн байсан охины өмнө, өөрийгөө үхэшгүй гэсэн залуу 
              гарч ирэв. Түүний золгүйтлийн чадварыг өөрийг нь алж чадах хүч байж магадгүй
              гэж бодсон залуу охиныг дагуулан хүчийг нь судлахаар шийдэв.
            </p22>
          </div>
          <div className='animeabout1'>
            <pre>{`
              Эх зохиол:     Manga
              Төлөв:            Гарч байгаа
              Гарсан жил:   2023
              Нийт анги:     12
            `}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeDesc;