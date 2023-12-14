import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    (async () => {
      const responseCocktails = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
      const responseCocktailsData = await responseCocktails.json();
      setCategory(responseCocktailsData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <section className="container">
        <h2>La liste de nos catégories de mocktails:</h2>
        {category ? (
          category.map((categorie) => {
            return (
              <article className="persoCard text-center">
                <div className="card-content">
                  <p>
                    <Link to={`/CategoryCocktails/${encodeURIComponent(categorie.strCategory)}`}>
                      {categorie.strCategory}
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

export default Category;
