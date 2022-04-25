import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import PokemonGrid from './components/pokemonGrid';
import PokemonDetails from './components/pokemonDetails';
import { GlobalProvider } from './contexts/globalState';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PokemonGrid />}></Route>
          <Route path="/pokemon/:id" element={<PokemonDetails />}></Route>
        </Routes>
      </GlobalProvider>
    </Router>
  );
}

export default App;