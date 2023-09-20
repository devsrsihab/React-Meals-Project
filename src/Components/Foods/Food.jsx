
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Food = ({ meal }) => {
  return (
    <div className="card px-0 py-3  bg-base-100 shadow-xl">
      <Link to={`/food/${meal.idMeal}`}>
        <figure>
          <img
            className="w-full object-cover"
            src={meal.strMealThumb}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {meal.strMeal} </h2>
        </div>
      </Link>
    </div>
  );
};
Food.propTypes  = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string
  }),
}

export default Food;
