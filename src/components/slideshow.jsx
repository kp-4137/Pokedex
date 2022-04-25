import { Carousel, Card, CardImg } from "react-bootstrap";
import { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";

const Slideshow = () => {
  const { pokemons } = useContext(GlobalContext);
  return (
    <Carousel>
      {pokemons.slice(0, 10).map((pokemon) => (
        <Carousel.Item interval={1000} key={pokemon.id}>
          <Card className="bg-dark text-white">
            <Card.Img src={pokemon.picture} alt={pokemon.name} />
            <Card.ImgOverlay>
              <Card.Title>{pokemon.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slideshow;
