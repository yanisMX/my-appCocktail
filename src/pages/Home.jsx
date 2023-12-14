import Header from "../components/Header";
import Footer from "../components/Footer";
import LastFourCocktails from "../components/LastFourCocktails";
import RandomCocktail from "../components/RandomCocktail";

const Home = () => {
  return (
    <>
      <Header />
      <LastFourCocktails />
      <RandomCocktail />
      <Footer />
    </>
  );
};

export default Home;
