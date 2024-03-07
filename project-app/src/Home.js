import DeliciousFoods from "./DeliciuosFoods";
import Footer from "./Footer";
import PopularFoods from "./PopularFoods";
import useFetch from "./useFetch";

const Home = () => {

  const {data2: slideFoods} = useFetch('https://api.spoonacular.com/recipes/random?apiKey=9b9461de4ed147f2aa49551fdaa4ad8c&number=9&tags=vegetarian');
  const {data: foods, error} = useFetch('https://api.spoonacular.com/recipes/random?apiKey=9b9461de4ed147f2aa49551fdaa4ad8c&number=10');

  return (
    <div className="home">
      {error && <div className="error-message"><h4>{error}</h4></div>}
      {slideFoods && <PopularFoods foods={slideFoods} heading="Our Popular Foods" />}
      {foods && <DeliciousFoods foods={foods} heading="Delicious Foods" />}
      <Footer />
    </div>
  );
}
 
export default Home;