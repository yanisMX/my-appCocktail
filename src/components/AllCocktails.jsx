import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCocktails = () => {
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      const responseCocktails = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      const responseCocktailsData = await responseCocktails.json();
      setCocktails(responseCocktailsData.drinks);
    })();
  }, []);

  return (
    <>
    <h2>La liste de nos délicieux mocktails</h2>
      <section className="container">
        {cocktails ? (
          cocktails.map((cocktail) => {
            return (
              <article key={cocktail.idDrink} className="persoCard">
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
          <p>En cours de chargement</p>
        )}
      </section>
    </>
  );
};
export default AllCocktails;
