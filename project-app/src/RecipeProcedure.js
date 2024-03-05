import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const RecipeProcedure = () => {

  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const getRecipe = async () => {
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=9b9461de4ed147f2aa49551fdaa4ad8c`);
      if(!res.ok) {
        throw new Error("Failed to fetch data...⚠");
      }
      const data = await res.json();

      setDetails(data);

    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getRecipe();
  }, [params.name]);

  return (
    <DetailWrapper className="recipe-procedure">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button 
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}>  
          Instructions
        </Button>
        <Button 
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}>
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map(ingredients => 
              <li key={ingredients}>{ingredients.original}</li>
            )}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 6rem 0rem 4rem;
  display: flex;
  
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2{
    margin-bottom: 2rem;
  }

  li{
    font-size: 1rem;
    line-height: 2.5rem;
  }

  ul{
    margin-top: 2rem;
  }

`;

const Button = styled.button`
  padding: .5rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-top: 30px;
  margin-left: 5rem;
`;

export default RecipeProcedure;