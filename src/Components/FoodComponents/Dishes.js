
import dataDishes from "../../Data/dataDishes";
import AllCategories from "../Category/AllCategories";
import EveryDish from "./EveryDish";

import { useSelector } from "react-redux";
import { changeSelectedCategory } from "../../redux/CategorySlice";


const Dishes = () => {
    const selectedCategory = useSelector(changeSelectedCategory)

    return(
        <div>
            <div>
            <p className="message">Chose from popular categories</p>
            <AllCategories/>
            </div>
            <div className='EveryDish'>
            
            {dataDishes
            .filter(dish => {
                if(selectedCategory === 'All') return true;
                return selectedCategory === dish.category;
            })
            .map(dish => <EveryDish dish={dish}/>)}
        </div>
        </div>
    )
}

export default Dishes;