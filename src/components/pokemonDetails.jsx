import axios from 'axios';
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import { GlobalContext } from '../contexts/globalState';

const PokemonDetails = () => {
    const {pokemons} = useContext(GlobalContext);
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShow(!show);
    };

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemon = async () => {
            if(params.id < 0 || params.id > 720){
                navigate('/error');
            }
            const result = await axios(`http://pokemon.test.dormzi.com/pokemon/${params.id}`);
            setPokemon(result.data);
            setIsLoading(false);
        };
        fetchPokemon();
    });

    return isLoading ? <h1>Pokemon Loading...</h1> : (
        <div className="container mt-5">
            <Modal show={show} onHide={toggleModal} size="lg" className="bg-dark">
                <Modal.Body className="d-flex justify-content-center overflow-hidden">
                    <img src={pokemon.picture} alt={pokemon.ename} width="90%"/>
                </Modal.Body>
            </Modal>
            <div className="row">
                <div className="col">
                    { params.id > 0 && <Link to={`/pokemon/${params.id - 1}`} className="btn btn-secondary">Previous</Link>}
                </div>
                <div className="col d-flex justify-content-end">
                    { params.id < 720 && <Link to={`/pokemon/${parseInt(params.id) + 1}`} className="btn btn-secondary">Next</Link>}
                </div>
            </div>
            <div className="row">
                <div className="pokemon-image">
                    <Button onClick={toggleModal} className="my-3 bg-dark border-0">
                        <img src={pokemon.picture} alt={pokemon.ename} className="mr-4"/>
                    </Button>
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
        </div>
    );
}

export default PokemonDetails;