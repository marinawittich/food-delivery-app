import { useDispatch, useSelector } from "react-redux";
import { changeSelectedCategory, FilteredCategory } from "../../redux/CategorySlice";



const Filter = ({category}) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector(changeSelectedCategory)
    return(
        <div className="filter">
            <p onClick={() => {dispatch(FilteredCategory(category))}} className={selectedCategory === category ? 'selectedCategory' : 'notSelectedCategory'}>{category}</p>
        </div>
    )
}

export default Filter;