import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="categoryCont">
            {['All', 'Appetizers', 'Asian', 'Seafood', 'Chicken', 'Steak'].map(category => <Filter category={category}/> )}
        </div>
    )
}

export default AllCategories;