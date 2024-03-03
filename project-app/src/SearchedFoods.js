import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SearchedFoods = () => {

  const [searchedFoods, setSearchedFoods] = useState([]);
  const [error, setError] = useState(null);
  
  let params = useParams();

  const getSearched = (name) => {

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9b9461de4ed147f2aa49551fdaa4ad8c&query=${name}`)
      .then(res => {
        if(!res.ok) {
          throw new Error("faild to fetch data...")
        }
        return res.json();
      })
      .then(data => {
        setSearchedFoods(data.results);
      })
      .catch(err => {
        setError(err.message);
      });
  }

  useEffect(() => {

    getSearched(params.search);

  }, [params.search]);

  return (
    <div className="searched">
      <Wrapper>
        {error && <div className="error-message"><h4>{error}</h4></div>}
        <Grid>
          {searchedFoods.map((food) => (
            <Card key={food.id}>
              <img src={food.image} alt={food.title} />
              <h4>{food.title}</h4>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 8rem 0 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 1rem;
  }

  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchedFoods;