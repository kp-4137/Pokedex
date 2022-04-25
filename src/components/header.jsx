// import { useContext } from 'react';
// import { TodoContext } from '../contexts/todoContext';
import ModalButton from "./modalButton";

const Header = () => {

    return(
        <header className="navbar navbar-dark bg-dark d-flex justify-content-space-between">
            <h1 className="text-white">Pokedex</h1>
            <ModalButton />
        </header>
    );
}

export default Header;