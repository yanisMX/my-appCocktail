import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AllGlasses = () => {
  const [glasses, setGlasses] = useState(null);

  useEffect(() => {
    (async () => {
      const responseCocktails = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
      );
      const responseCocktailsData = await responseCocktails.json();
      setGlasses(responseCocktailsData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <h2>La liste de nos verres:</h2>
      <section className="container">
        
        {glasses ? (
          glasses.map((glasse) => {
            return (
              <article className="card text-center">
                <div className="card-content">
                  <p>
                    <Link to={`/FilterByGlasses/${glasse.strGlass}`}>
                      {glasse.strGlass}
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

export default AllGlasses;
