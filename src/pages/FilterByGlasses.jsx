import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const FilterByGlasses = () => {
  const { adn } = useParams();

  const [glasses, setGlasses] = useState(null);

  useEffect(() => {
    (async () => {
      const cocktailResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + adn
      );
      const cocktailsResponseData = await cocktailResponse.json();
      setGlasses(cocktailsResponseData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <section className="container">
        {glasses ? (
          <>
              {glasses.map((glasse) => {
                return (
                  <article className="persoCard">
                    <img src={glasse.strDrinkThumb} alt={glasse.strDrink} />
                    <div className="card-content">
                      <p>{glasse.strDrink}</p>
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

export default FilterByGlasses;
