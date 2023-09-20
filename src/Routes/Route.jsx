import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from '../Components/Home/Home';
import Foods from '../Components/Foods/Foods';
import SingleFood from '../Components/Foods/SingleFood';

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/> ,
      children: [
        {
          path: '/foods/:categoryName',
          loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`) ,
          element: <Foods />
    
        },
        {
          path: '/food/:foodId' ,
          loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`) ,
          element: <SingleFood/> ,
        }
      ]
    }



  ]);
  return <RouterProvider router={router} />
};

export { Route} ;
