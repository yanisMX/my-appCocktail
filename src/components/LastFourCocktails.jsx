import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LastFourCocktails = () => {
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      const responseCocktails = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      const responseCocktailsData = await responseCocktails.json();
      const lastFourCocktails = responseCocktailsData.drinks.slice(-4);
      setCocktails(lastFourCocktails);
    })();
  }, []);

  return (
    <>
      <section className="container">
        <Link to="/OurCocktails" className="Link">
          <p>Nos quatres derniers mocktails :</p>
        </Link>
        {cocktails ? (
          cocktails.map((cocktail) => {
            return (
              <article key={cocktail.idDrink} className="persoCard">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <div className="card-content">
                  <p>
                    {cocktail.strDrink}
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
          <p>En cours de chargement</p>
        )}
      </section>
    </>
  );
};

export default LastFourCocktails;
