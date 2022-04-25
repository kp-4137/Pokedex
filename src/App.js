import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './components/header';
import PokemonGrid from './components/pokemonGrid';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const result = await axios('http://pokemon.test.dormzi.com/pokemon');
      console.log(result.data[0]);
      setPokemons(result.data);
      setIsLoading(false);
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <Header />
      <PokemonGrid isLoading={isLoading} pokemons={pokemons}/>
    </>
  );
}

export default App;