const DeliciousFoods = ({foods, heading}) => {
  return (
    <div className="delicious">
      <h2>{heading}</h2>
      <div className="image-box" key={foods.id}>
        {foods.map((food) => (
          <div className="card" key={food.id}>
            <p>{food.title}</p>
            <img src={food.image} alt={food.title} /> 
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default DeliciousFoods;