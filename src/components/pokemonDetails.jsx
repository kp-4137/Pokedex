import axios from 'axios';
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/globalState';

const PokemonDetails = () => {
    const {pokemons} = useContext(GlobalContext);
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(params.id < 0 || params.id >= pokemons.length){
            navigate('/error');
        }
        const fetchPokemon = async () => {
            const result = await axios(`http://pokemon.test.dormzi.com/pokemon/${params.id}`);
            setPokemon(result.data);
            setIsLoading(false);
        };
        fetchPokemon();
    }, []);

    return isLoading ? <h1>Pokemon Loading...</h1> : (
        <div className="container d-md-flex mt-5">
            <div className="pokemon-image">
                <img src={pokemon.picture} alt={pokemon.ename} className="mr-4"/>
            </div>
            <div className="pokemon-details d-flex flex-column">
                <div>
                    <h3>English Name:</h3>
                    <p>{pokemon.ename}</p>
                </div>
                <div>
                    <h3>Chinese Name:</h3>
                    <p>{pokemon.cname}</p>
                </div>
                <div>
                    <h3>Japanese Name:</h3>
                    <p>{pokemon.jname}</p>
                </div>
                <div>
                    <h3>Image Id:</h3>
                    <p>{pokemon.id}</p>
                </div>
                <div>
                    <h3>Skills:</h3>
                    {Object.keys(pokemon.skills).map((skill) => <li key={skill} style={{listStyleType: "none"}}>
                            <h5>{skill}</h5>
                            <p>{pokemon.skills[skill].toString()}</p>
                        </li>)}
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;