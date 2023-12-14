import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AllIngredients = () => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    (async () => {
      const responseCocktails = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
      );
      const responseCocktailsData = await responseCocktails.json();
      setIngredients(responseCocktailsData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <h2>La liste de nos ingrédients pour constituer nos mocktails:</h2>

      <section className="container">
        {ingredients ? (
          ingredients.map((ingredient) => {
            return (
                 <article className="card text-center">
                 <div className="card-content">
                   <p>
                     <Link to={`/FilterByIngredient/${ingredient.strIngredient1}`}>
                       {ingredient.strIngredient1}
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
      <Footer />
    </>
  );
};

export default AllIngredients;
