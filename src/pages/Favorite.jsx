import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import './favorite.css';
import Header from './Header';
import { useAnimeContext } from './AnimeContext';
import Footer from './Footer';

function Favorite() {
  const { animeInfo, setAnimeInfoData } = useAnimeContext();
const [active, setActive] = useState(false);

const handleToggleActive = () => {
  setActive(!active);
};
const handleRemoveFavorite = () => {
  // Remove anime from the favorite list
  setAnimeInfoData(null);
};

// Check if 'animeInfo' is present
const isBannerActive = !!animeInfo;

return (
  <main>
    <SideMenu active={active} />
    <div className={`FavoriteBanner ${active ? 'active' : undefined}`}>
      <div className={`isBannerActive ${isBannerActive ? 'active' : undefined}`}>
      <Header toggleActive={handleToggleActive} active={active} />

      {animeInfo && (

        <div className="favoriteAnime">
          <img src={animeInfo.image} alt={animeInfo.title} />
          
          </div>
      )}
      </div>
      <Footer active={active}/>
       </div>
  </main>
);
}

export default Favorite;