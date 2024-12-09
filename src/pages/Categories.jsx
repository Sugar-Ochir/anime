import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import './categories.css';
import Header from './Header';
import AnimeCard from '../components/AnimeCard';
import filterListData from '../data/filterListData';
import animesListData from '../data/animesListData';
import Footer from './Footer';

function Categories() {
  const [data, setData] = useState(animesListData);
  const [filters, setFilters] = useState(filterListData);
  const [searchInput, setSearchInput] = useState('');
  const [filteredAnimes, setFilteredAnimes] = useState(animesListData);

  const handFilterAnimes = (category ) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === 'Бүгд') {
      setData(animesListData);
    } else {
      const filtered = animesListData.filter(
        (anime) => anime.category === category
      );
      setData(filtered);
    }
  };

  const [active, setActive] = useState(false);

  const handleToggleActive = () => {
    setActive(!active);
  };

  return (
    <main>
      <SideMenu active={active} />
      <div className={`categoriesBanner ${active ? 'active' : undefined}`}>
        <Header toggleActive={handleToggleActive} active={active} setSearchInput={setSearchInput}
        setFilteredAnimes={setFilteredAnimes}/>
        
        <div className='container-fluid mt-2'>
          <ul className='filters'>
            {filters.map((filter) => (
              <li
                name={filter.category}
                key={filter._id}
                className={`${filter.active ? 'active' : undefined}`}
                onClick={() => handFilterAnimes(filter.name)}
              >
                {filter.name}
              </li>
              
            ))}
          </ul>
          <div className='row'>
            
            <AnimeCard animes={data}  active={active} />
          </div>
        </div>
        <Footer active={active}/>
      </div>
    </main>
  );
}

export default Categories;
