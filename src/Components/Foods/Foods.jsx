import { useLoaderData } from "react-router-dom"
import Food from './Food'

const Foods = () => {

    const foods = useLoaderData()
    const meals  = foods.meals
  return (
    <>
    <div className="meals h-screen  overflow-y-scroll grid grid-cols-3 px-8 gap-6">

{
    meals.map((meal,index) => <Food meal={meal} key={index} /> )
}
</div>
    </>
  )
}

export default Foods