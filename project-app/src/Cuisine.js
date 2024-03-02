import styled from "styled-components";
// import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  
  const getCuisine = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9b9461de4ed147f2aa49551fdaa4ad8c&cuisine=${name}`);
    const data = await api.json();

    setCuisine(data.results);
  }

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="cuisine">
      <Wrapper>
        <Grid>
          {cuisine.map((food) => (
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

export default Cuisine;