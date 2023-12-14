import { useEffect, useState } from "react";
import Mocktail from "../Mocktail.png";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const [cocktail, setCocktail] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const Search = () => {
    window.location.href = `/SearchResults/${searchTerm}`;
  };

  useEffect(() => {
    (async () => {
      const cocktailResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      const cocktailsResponseData = await cocktailResponse.json();
      setCocktail(cocktailsResponseData.drinks);
    })();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header>
      <nav className="navbar bg-dark">
        <a className="navbar-brand" href="/">
          <img src={Mocktail} alt="Mocktail by Yanis" className="logo" />
        </a>
        <h1 className="text-white">Mocktail by Yanis 🍹</h1>
        <ul>
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Categories" className="text-white">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/OurCocktails" className="text-white">
              Nos mocktails
            </Link>
          </li>
          <li>
            <Link to="/Allingredients" className="text-white">
              Nos ingrédients
            </Link>
          </li>
          <li>
            <Link to="/AllGlasses" className="text-white">
              Nos verres
            </Link>
          </li>
        </ul>
        <form class="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Rechercher"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="btn btn-light">
            <Link to="/SearchPage/" className="text-dark" onClick={Search}>
              Valider
            </Link>
          </button>
        </form>
      </nav>
      </header>
    </>
  );
};

export default Header;
