import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, searchCountries, combinedFilter } from "../../Redux/actions";
import Styles from "./navBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [nameSortOrder, setNameSortOrder] = useState("");
  const [populationSortOrder, setPopulationSortOrder] = useState("");

  const handleSearch = (event) => {
    const name = event.target.value;
    if (name) {
      dispatch(searchCountries(name));
    } else {
      dispatch(clearSearch());
    }
  };

  const handleNameSort = (event) => {
    const order = event.target.value;
    setNameSortOrder(order);
    dispatch(combinedFilter("order", order));
  };

  const handlePopulationSort = (event) => {
    const order = event.target.value;
    setPopulationSortOrder(order);
    dispatch(combinedFilter("population", order));
  };

  const handleContinentFilter = (event) => {
    const continents = event.target.value;
    setSelectedContinent(continents);
    dispatch(combinedFilter("continents", continents));
  };

  const handleActivityFilter = (event) => {
    const activity = event.target.value;
    setSelectedActivity(activity);
    dispatch(combinedFilter("activities", activity));
  };

  useEffect(() => {
    dispatch(
      combinedFilter("all", {
        continents: selectedContinent,
        activities: selectedActivity,
        order: nameSortOrder,
        population: populationSortOrder,
      })
    );
  }, [
    selectedContinent,
    selectedActivity,
    nameSortOrder,
    populationSortOrder,
    dispatch,
  ]);

  return (
    <div className={Styles.navBarContainer}>
      <input
        className={Styles.searchInput}
        type="text"
        placeholder="Search Country"
        onChange={handleSearch}
      />
      <div className={Styles.buttonContainer}>
        <Link to="/activities" className={Styles.bn39}>
          <span className={Styles.bn39span}>Activities</span>
        </Link>
        <Link to="/form" className={Styles.bn39}>
          <span className={Styles.bn39span}>New Activity</span>
        </Link>
      </div>
      <div className={Styles.filtersContainer}>
        <select onChange={handleContinentFilter}>
          <option value="">Filter by Continent</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select onChange={handleActivityFilter}>
          <option value="">Filter by Activity</option>
          {activities.map((activity) => (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
        <select onChange={handleNameSort} name="order" id="order">
          <option value="">Sort by Name</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select onChange={handlePopulationSort}>
          <option value="">Sort by Population</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
