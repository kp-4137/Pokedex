import { Link } from "react-router-dom";
import ModalButton from "./modalButton";

const Header = () => {

    return(
        <header className="navbar navbar-dark bg-dark d-flex justify-content-space-between">
            <div className="container">
                <h1><Link to="/" className="text-white" style={{textDecoration: "none"}}>Pokedex</Link></h1>
                <ModalButton />
            </div>
        </header>
    );
}

export default Header;