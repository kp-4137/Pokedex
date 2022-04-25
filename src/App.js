import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import PokemonGrid from './components/pokemonGrid';
import PokemonDetails from './components/pokemonDetails';
import PageNotFound from './components/pageNotFound';
import { GlobalProvider } from './contexts/globalState';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PokemonGrid />}></Route>
          <Route path="/pokemon/:id" element={<PokemonDetails />}></Route>
          <Route path="/error" element={<PageNotFound />}></Route>
        </Routes>
      </GlobalProvider>
    </Router>
  );
}

export default App;