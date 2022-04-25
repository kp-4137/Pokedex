import axios from "axios";
import { useEffect, createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const result = await axios("http://pokemon.test.dormzi.com/pokemon");
      setPokemons(result.data);
      setIsLoading(false);
    };
    fetchPokemons();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        pokemons,
        isLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
