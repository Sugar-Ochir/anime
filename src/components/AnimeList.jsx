import React, { useEffect, useState } from 'react';

function AnimeList() {
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/anime')
            .then(response => response.json())
            .then(data => setAnime(data))
            .catch(error => console.error('Error fetching anime:', error));
    }, []);

    return (
        <div>
            <h1>Anime List</h1>
            <ul>
                {anime.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default AnimeList;
