import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FilterByIngredient = () => {
  const { identity } = useParams();

  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    (async () => {
      const cocktailResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + identity
      );
      const cocktailsResponseData = await cocktailResponse.json();
      setIngredient(cocktailsResponseData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <section className="container">
        {ingredient ? (
          <>
              {ingredient.map((ingred) => {
                return (
                  <article className="persoCard text-center">
                    <img src={ingred.strDrinkThumb} alt={ingred.strDrink} />
                    <div className="card-content">
                      <p>
                        {ingred.strDrink}
                        <img src={`www.thecocktaildb.com/images/ingredients/${ingred.strDrink}-Small.png`} alt=""/>
                        </p>
                    </div>
                  </article>
                );
              })}
        </>
        ) : (
          <p>En cours de chargement</p>
        )}
      </section>
      <Footer />
    </>
  );
};
export default FilterByIngredient;
