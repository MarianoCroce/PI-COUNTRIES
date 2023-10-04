import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
        dispatch(sortByName(order));
    };

    const handlePopulationSort = (event) => {
        const order = event.target.value;
        dispatch(sortByPopulation(order))
    };

    const handleContinentFilter = (event) => {
        const continent = event.target.value;
        dispatch(filterByContinent(continent));
    };

    const handleActivityFilter = (event) => {
        const activity = event.target.value;
        dispatch(filterByActivity(activity));
    };


    return (
        <div>
            <Link>
            <h2>New Activity</h2>
            </Link>
            <Link>
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
                <select onChange={handleContinentFilter}>
                    <option value="">Filter by Continent</option>
                    <option value="Africa">Africa</option>
                    <option value="Antartic">Antartic</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select value={handleActivityFilter}>
                    <option>Filter by Activity</option>
                    {activities.map((activity) =>(
                        <option key={activity.id} value={activity.name}>
                            {activity.name}
                        </option>
                    ))}
                </select>
                <select onChange={handleNameSort}>
                    <option value="">Sort by Name</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
                <select onChange={handlePopulationSort}>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                </select>
            </div>
        </div>
    )





} 