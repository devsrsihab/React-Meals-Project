import { Link, Outlet } from "react-router-dom";
import Categories from "../Foods/Categories";

const Home = () => {
  return (
    <>
      <div className="w-10/12 mx-auto  h-screen py-10">
        <h1 className="text-6xl text-red-600 font-bold my-10 text-center uppercase" >Choose Your Food Category</h1>
        <div className="home-content flex">
        <div className="categories-sidebar	 w-1/4 ">
        <h1 className="text-3xl text-black font-semibold my-10  capitalize" >Food Categories</h1>
        <Link to={'/'} >
        <button className="btn text-white mb-10 btn-primary">All Categories</button>
        </Link>

        <Categories/>
        </div>
        <div className="outlet-bar w-3/4  ">
        <h1 className="text-3xl text-black- font-semibold my-10  capitalize" >Foods</h1>
          <Outlet/>
        </div>

        </div>

      </div>
    </>
  );
};

export default Home;
