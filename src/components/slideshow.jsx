import { Carousel } from "react-bootstrap";
import { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";

const Slideshow = () => {
  const { pokemons } = useContext(GlobalContext);
  return (
    <Carousel>
      {pokemons.slice(0, 10).map((pokemon) => (
        <Carousel.Item interval={1000} key={pokemon.id}>
          <img
            className="d-block w-100"
            src={pokemon.picture}
            alt={pokemon.name}
          />
          <Carousel.Caption>
            <h1 className="text-black display-1">{pokemon.name}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slideshow;
