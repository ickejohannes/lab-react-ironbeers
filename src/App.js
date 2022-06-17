
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeersPage';
import RandomBeer from './pages/RandomBeerPage';
import AddBeer from './pages/AddBeerPage';
import ErrorPage from './pages/ErrorPage';
import BeerDetailsPage from './pages/BeerDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<AddBeer />} />
        <Route path="/beers/:beerId" element ={<BeerDetailsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
