import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  clearSearch,
  searchCountries,
  sortByName,
  sortByPopulation,
  filterByContinent,
  filterByActivity,
} from "../../Redux/actions";


const NavBar = () => {
    
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);

    const [selectedContinent, setSelectedContinent] = useState("");
    const [selectedActivity, setSelectedActivity] = useState("")
    const [nameSortOrder, setNameSortOrder] = useState("");
    const [populationSortOrder, setPopulationSortOrder] = useState("")
    
    const handleSearch = (event) => {
        const name = event.target.value;
        if(name) {
            dispatch(searchCountries(name));
        } else {
            dispatch(clearSearch())
        }
    };
    
    const handleNameSort = (event) => {
        const order = event.target.value;
        setNameSortOrder(order);
        dispatch(sortByName(order));
    };

    const handlePopulationSort = (event) => {
        const order = event.target.value;
        setPopulationSortOrder(order);
        dispatch(sortByPopulation(order))
    };

    const handleContinentFilter = (event) => {
        const continents = event.target.value;
        setSelectedContinent(continents);
        dispatch(filterByContinent(continents));
    };

    const handleActivityFilter = (event) => {
        const activity = event.target.value;
        setSelectedActivity(activity);
        dispatch(filterByActivity(activity));
    };


    useEffect(() => {
        if (selectedContinent) {
            setSelectedActivity("")
            
        }
    }, [selectedContinent])



    return (
        <div>
            <Link to="/form">
            <h2>New Activity</h2>
            </Link>
            <Link to="/activities">
            <h2>Activities</h2>
            </Link>
            <div>
                <input
                type="text"
                placeholder="Search Country"
                onChange={handleSearch}
                />
            </div>
            <div>
                <select onChange={handleContinentFilter} value={selectedContinent}>
                    <option value="">Filter by Continent</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Africa">Africa</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select onChange={handleActivityFilter} value={selectedActivity}>
                    <option>Filter by Activity</option>
                    {activities.map((activity) =>(
                        <option key={activity.id} value={activity.name}>
                            {activity.name}
                        </option>
                    ))}
                </select>
                <select onChange={handleNameSort} value={nameSortOrder}>
                    <option value="">Sort by Name</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
                <select onChange={handlePopulationSort} value={populationSortOrder}>
                <option value="">Sort by Population</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                </select>
            </div>
        </div>
    )
};

export default NavBar;