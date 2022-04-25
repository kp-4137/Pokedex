import { Link } from 'react-router-dom';

const PokemonCard = ({pokemon}) => {
    return(
        <div className="card">
            <img className="card-img-top" src={pokemon.picture} alt={pokemon.name} />
            <div className="card-body">
                <h3 className="card-title">{pokemon.name}</h3>
                <Link to={`/pokemon/${pokemon.id}`} className="btn btn-warning">Info</Link>
            </div>
        </div>
    );
}

export default PokemonCard;