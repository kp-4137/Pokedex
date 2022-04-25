import './App.css';
import Header from './components/header';
import PokemonGrid from './components/pokemonGrid';
import { GlobalProvider } from './contexts/globalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <PokemonGrid />
    </GlobalProvider>
  );
}

export default App;