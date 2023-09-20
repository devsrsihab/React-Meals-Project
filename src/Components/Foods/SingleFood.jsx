import {  useLoaderData, useNavigate } from "react-router-dom";

const SingleFood = () => {

  const navigate = useNavigate()
  const handleNavigate = () => navigate(-1)

  const food = useLoaderData();
  const {strMeal,strCategory,strInstructions,strMealThumb} = food.meals[0]
  console.log(strMeal);

  return (
    <section className="bg-white text-black">
      <div className="container px-6 py-5 mx-auto">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover self-start	 w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={strMealThumb}
            alt=""
          />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-xl  capitalize">Category: {strCategory}</p>
            <a
              href="#"
              className="block mt-4 text-2xl font-semibold md:text-3xl"
            >
              {
                strMeal
              }
            </a>
            <p className="mt-3 text-sm  md:text-sm">
             {strInstructions}
            </p>

            <div className="flex items-center mt-6">
            <button onClick={handleNavigate} className="btn text-white btn-accent">Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleFood;
