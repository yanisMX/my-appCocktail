import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FilterByCategory = () => {
  const { dna } = useParams();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + dna
      );
      const responseData = await response.json();
      setCategory(responseData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <section className="container">
      {category ? (
        <>
          {category.map((cat) => {
            return (
                <article className="persoCard">
                <img src={cat.strDrinkThumb} alt={cat.strDrink} />
                <div className="card-content">
                  <p>
                  {cat.strDrink}{" "}
                    <Link to={`/cocktail/details/${cat.idDrink}`}>
                      <br />
                      Plus de détails
                    </Link>
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

export default FilterByCategory;
