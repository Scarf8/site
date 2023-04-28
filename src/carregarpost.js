import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(data => setmovies(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="card-container">
      {movies.map(poster => (
        <div key={poster.id} className="card">
          <img src={poster.url} alt={poster.title} />
          <div className="card-body">
            <h2>{poster.title}</h2>
            <p>{poster.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;