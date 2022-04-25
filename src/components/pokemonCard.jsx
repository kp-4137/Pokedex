import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card className="bg-dark text-white p-2">
      <Card.Img src={pokemon.picture} alt={pokemon.name} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Link to={`/pokemon/${pokemon.id}`} className="btn btn-warning">
          Info
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
