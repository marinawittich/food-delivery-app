import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="categoryCont" >
            {['All', 'Appetizers', 'Asian', 'Seafood', 'Chicken', 'Steak'].map((category, index) => <Filter category={category} key={index}/> )}
        </div>
    )
}

export default AllCategories;