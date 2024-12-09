import React, { createContext, useContext, useState, useEffect } from 'react';

const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animeInfo, setAnimeInfo] = useState(() => {
    // Load animeInfo from localStorage on component mount
    const storedAnimeInfo = localStorage.getItem('animeInfo');
    return storedAnimeInfo ? JSON.parse(storedAnimeInfo) : null;
  });

  useEffect(() => {
    // Save animeInfo to localStorage whenever it changes
    localStorage.setItem('animeInfo', JSON.stringify(animeInfo));
  }, [animeInfo]);

  const setAnimeInfoData = (data) => {
    setAnimeInfo(data);
  };

  return (
    <AnimeContext.Provider value={{ animeInfo, setAnimeInfoData }}>
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnimeContext = () => {
  return useContext(AnimeContext);
};