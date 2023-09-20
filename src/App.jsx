import React from 'react';
import './App.css';
import buscadorIcono from './buscador.svg';
import { TargetaPelicula } from './TargetaPelicula';
import { useState , useEffect } from 'react';
const API_URL = 'http://www.omdbapi.com/?apikey=4f00d72b';
const App = () => {
  const [movies , setMovies] = useState([]);
  const [busquedaParam , setBusquedaParam] = useState('')
  const buscadorCine = async (titulo) => {
    const response = await fetch(`${API_URL}&s=${titulo}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    buscadorCine('');
  },[])
  const IntroKey = (e) => {if (e.key === 'Enter') buscadorCine(busquedaParam)};
  return (
    <div className='app'>
      <h1>Cine Colombia</h1>
      <div className='busqueda'>
        <input 
          type="text"
          placeholder='Busacacador de Peliculas'
          value= {busquedaParam}
          onChange={(e) => setBusquedaParam(e.target.value)}
          onKeyDown={IntroKey}
        />
        <img 
          src={buscadorIcono}
          alt="Buscar" 
          onClick={() => buscadorCine(busquedaParam)}
        />
      </div>
      { movies?.length > 0 ? (
        <div className='contenedor'>
          {
            movies.map((movie) => (
              <TargetaPelicula movie1 = {movie}/>
            ))
          }
        </div>
        ) : (
          <div className='empty'>
            <h2>No se encontraron Peliculas</h2>
          </div>
        )};
    </div>
  )
};

export default App;