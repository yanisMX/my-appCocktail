import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SearchPage = () => {
  const { research } = useParams();

  const [cocktailResearch, setCocktailResearch] = useState(null);

  useEffect(() => {
    (async () => {
      const cocktailResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + research
      );
      const cocktailsResponseData = await cocktailResponse.json();
      setCocktailResearch(cocktailsResponseData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <p>
        {cocktailResearch ? (
          cocktailResearch.map((cocktail) => {
            return (
              <article key={cocktail.idDrink} className="card">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <div className="card-content">
                  <p>
                    {cocktail.strDrink}{" "}
                    <Link to={`/cocktail/details/${cocktail.idDrink}`}>
                      <br />
                      Plus de détails
                    </Link>
                  </p>
                </div>
              </article>
            );
          })
        ) : (
          <p>Erreur de chargement</p>
        )}
      </p>
      <Footer />
    </>
  );
};

export default SearchPage;
