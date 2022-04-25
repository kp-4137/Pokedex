const PokemonCard = ({pokemon}) => {
    return(
        <div className="card">
            <img className="card-img-top" src={pokemon.picture} alt={pokemon.name} />
            <div className="card-body">
                <h3 className="card-title">{pokemon.name}</h3>
                <a className="btn btn-warning">Info</a>
            </div>
        </div>
    );
}

export default PokemonCard;