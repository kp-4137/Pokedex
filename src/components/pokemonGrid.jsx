import { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";
import PokemonCard from "./pokemonCard";

const PokemonGrid = () => {
  const { isLoading, pokemons } = useContext(GlobalContext);

  return isLoading ? (
    <h1>Pokedex Loading...</h1>
  ) : (
    <div className="container">
      <div className="row">
        {pokemons.map((pokemon) => (
          <div className="col-md-2 my-3" key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonGrid;
