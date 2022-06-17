
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/HomePage';
import AllBeers from './pages/AllBeersPage';
import RandomBeer from './pages/RandomBeerPage';
import AddBeer from './pages/AddBeerPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<AddBeer />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
