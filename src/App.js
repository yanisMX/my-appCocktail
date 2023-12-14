import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllCocktailsPage from './pages/AllCocktailsPage';
import CocktailDetails from './pages/CocktailDetails';
import AllCategories from './pages/AllCategories';
import FilterByCategory from './pages/FilterByCategory';
import AllIngredients from './pages/AllIngredients';
import AllGlasses from './pages/AllGlasses';
import FilterByGlasses from './pages/FilterByGlasses';
import FilterByIngredient from './pages/FilterByIngredient';
import SearchPage from './pages/SearchPage';

function App() {
  return(<BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurCocktails" element={<AllCocktailsPage/>}/>
        <Route path="/cocktail/details/:id" element={<CocktailDetails />} />
        <Route path="/Categories" element={<AllCategories />} />
        <Route path="/CategoryCocktails/:dna" element={<FilterByCategory />} />
        <Route path="/Allingredients" element={<AllIngredients />} />
        <Route path="/AllGlasses" element={<AllGlasses />} />
        <Route path="/FilterByGlasses/:adn" element={<FilterByGlasses />} />
        <Route path="/FilterByIngredient/:identity" element={<FilterByIngredient />} />
        <Route path="/SearchResults/:research" element={<SearchPage />} />
      </Routes>
    </BrowserRouter> )
}

export default App;
