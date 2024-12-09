import React, {useState} from 'react'
import './home.css';
import SideMenu from '../components/SideMenu';
import Header from './Header';
import AnimeHome from './AnimeHome';
import Footer from './Footer';
import animesListData from '../data/animesListData';
function Home() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState(animesListData);
  const [searchInput, setSearchInput] = useState('');
  const [filteredAnimes, setFilteredAnimes] = useState(animesListData);
    const handleToggleActive=()=>{
        setActive(!active);
    };
  return (
    <main>
        <SideMenu active={active} />
    <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggleActive={handleToggleActive} active={active} setSearchInput={setSearchInput}
        setFilteredAnimes={setFilteredAnimes}/>
        <AnimeHome active={active} filteredAnimes={filteredAnimes} animes={data}/>
        <Footer active={active}/>
    </div>
    </main>
  );
}

export default Home;