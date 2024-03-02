import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; 
import styled from "styled-components";

const PopularFoods = ({foods, heading}) => {
  return (
    <div className="popular">
      <Wrapper>
        <h2>{heading}</h2>
        <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}>
          {foods.map(food => (
            <SplideSlide key={food.id}>
              <Card>
                <p>{food.title}</p>
                <img src={food.image} alt={food.title} />
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 8rem 0rem 4rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left:50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
 
export default PopularFoods;