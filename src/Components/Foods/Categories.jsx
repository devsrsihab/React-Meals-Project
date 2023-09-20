import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  // define state
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategoris = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      setCategories(data.categories);
    };
    getCategoris()
  });


  return (
    <>
    <div className="categories grid grid-cols-1 h-screen  overflow-y-scroll gap-4">

    {
        categories.map((category) => <Category category={category} key={category.idCategory} /> )
    }
    </div>

    </>
  );
};

export default Categories;
