import { Link } from "react-router-dom";
import styled from "styled-components";

const DeliciousFoods = ({foods, heading}) => {
  return (
    <div className="delicious">
      <h2>{heading}</h2>
      <div className="image-box" key={foods.id}>
        {foods.map((food) => (
          <div className="card" key={food.id}>
            <Link to={"/recipes/" + food.id}>
              <p className="name">{food.title}</p>
              <img src={food.image} alt={food.title} />
              <Gradient />
            </Link> 
          </div>
        ))}
      </div>
    </div>
  );
}

const Gradient = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default DeliciousFoods;