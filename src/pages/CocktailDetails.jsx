import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    (async () => {
      const cocktailResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
      );
      const cocktailsResponseData = await cocktailResponse.json();
      setCocktail(cocktailsResponseData.drinks[0]);
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-5">
        {cocktail ? (
          <div className="card">
            
            <div className="card-body">
              <h2 className="card-title">
                {cocktail.strDrink}
                <p className="card-text">{cocktail.strCategory}</p>
              </h2>
              <img
              className="card-img-top img-fluid"
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
            />
              <p className="card-text">{cocktail.strInstructions}</p>
              <div>
                <h3>Ingrédients :</h3>
                <ul className="list-unstyled">
                  {(() => {
                    const ingredients = [];
                    for (let ing = 1; ing <= 15; ing++) {
                      const stringredient = `strIngredient${ing}`;
                      const ingredientvalue = cocktail[stringredient];
                      if (ingredientvalue) {
                        ingredients.push(
                          <li>
                            <Link to="/Allingredients">{ingredientvalue}</Link>
                          </li>
                        );
                      }
                    }
                    return ingredients;
                  })()}
                </ul>
              </div>
              <p className="card-text">
                Dernière modification : {cocktail.dateModified}
              </p>
            </div>
          </div>
        ) : (
          <p>En cours de chargement</p>
        )}
      </div>
    </>
  );
};

export default CocktailDetails;
