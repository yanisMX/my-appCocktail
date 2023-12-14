import { useEffect, useState } from "react";

const RandomCocktail = () => {
  const [cocktails, setCocktails] =
    useState(null); /** J'utilise useState pour gérer l'état de ma variable */

  /** J'utilise useEffect pour gérer l'affichage de ma variable, une fois les données récupérées
   * Je créé une fonction anonyme qui s'auto-invoque, car useContext ne prend pas en paramètre une fonction async
   *
   */
  useEffect(() => {
    (async () => {
      const responseCocktails = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      const responseCocktailsData = await responseCocktails.json();
      const randomCocktail =
        responseCocktailsData.drinks[
          Math.floor(Math.random() * responseCocktailsData.drinks.length)
        ];
      setCocktails(randomCocktail);
    })();
  }, []);

  return (
    <>
      <h2>Savourez un mocktail :</h2>
      {cocktails ? (
        <p key={cocktails.idDrink} className="persoCard titleDark">
          <img src={cocktails.strDrinkThumb} alt={cocktails.strDrink} />
          <div className="card-content">
            <p>{cocktails.strDrink}</p>
          </div>
        </p>
      ) : (
        <p>En cours de chargement</p>
      )}
    </>
  );
};

export default RandomCocktail;
