import { useDispatch, useSelector } from "react-redux";
import { changeSelectedCategory, FilteredCategory } from "../../redux/CategorySlice";



const Filter = ({category, index}) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector(changeSelectedCategory)
    return(
        <div className="filter" key={index}>
            <p onClick={() => {dispatch(FilteredCategory(category))}} className={selectedCategory === category ? 'selectedCategory' : 'notSelectedCategory'}>{category}</p>
        </div>
    )
}

export default Filter;