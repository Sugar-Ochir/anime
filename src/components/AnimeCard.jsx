import React from 'react';
import './animecard.css';

function AnimeCard({ animes, active }) {
  const Animes0 = animes.slice(0, 1);
  const Animes1 = animes.slice(0, 5);
  const Animes2 = animes.slice(5, 10);
  const Animes3 = animes.slice(10, 15);
  const Animes4 = animes.slice(15, 20);
  const Animes5 = animes.slice(20, 25);
  const Animes6 = animes.slice(25, 30);
  const Animes7 = animes.slice(30, 35);
  const Animes8 = animes.slice(35, 40);
  const Animes9 = animes.slice(40, 45);
  const Animes10 = animes.slice(45, 50);
  const Animes11 = animes.slice(55, 60);
  const Animes12 = animes.slice(60, 65);

  return (
    <div className={`container-animes ${active ? 'active' : undefined}`}>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes1.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes2.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes3.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes4.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes5.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes6.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes7.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes8.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes9.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes10.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes11.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className='anime-row'>
        <ul className='animes'>
          {Animes12.map((anime) => (
            <li key={anime._id}>
              <img src={anime.img} alt={anime.category} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnimeCard;
