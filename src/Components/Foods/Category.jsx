import PropTypes from "prop-types"; // ES6
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div className="card px-0 py-3 bg-base-100 shadow-xl">

        <Link to={`/foods/${category.strCategory}`} >
      <figure>
        <img
          className="w-full object-cover"
          src={category.strCategoryThumb}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {category.strCategory} </h2>
      </div>
      </Link>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    strCategoryThumb: PropTypes.string,
    strCategory: PropTypes.string,
  }),
};

export default Category;
