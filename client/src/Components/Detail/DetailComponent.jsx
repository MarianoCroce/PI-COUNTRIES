import { Link } from "react-router-dom";
import Styles from "./detailComponent.module.css";

const DetailComponent = (props) => {
  const { countryDetail } = props;

  return (
    <div className={Styles.detailComponent}>
      {countryDetail && (
        <div key={countryDetail.id}>
          <h1>Name: {countryDetail.name}</h1>
          <h2>ID: {countryDetail.id}</h2>
          <img src={countryDetail.image} alt={countryDetail.name} />
          <h2>Continent: {countryDetail.continents}</h2>
          <h2>Capital: {countryDetail.capital}</h2>
          <h2>Subregion: {countryDetail.subregion}</h2>
          <h2>Area: {countryDetail.area}</h2>
          <h2>Population: {countryDetail.population} inhabitants</h2>
          <h2>Activities:</h2>
          <ul>
            {countryDetail.Activities && countryDetail.Activities.length > 0 ? (
              countryDetail.Activities.map((activity) => (
                <li key={activity.id}>
                  <p>Name: {activity.name}</p>
                  <p>Difficulty: {activity.difficulty}</p>
                  <p>Duration: {activity.duration}</p>
                  <p>Season: {activity.season}</p>
                </li>
              ))
            ) : (
              <li>No available activities</li>
            )}
          </ul>
        </div>
      )}
      <div>
        <Link to={"/home"} className={Styles.bn39} href="/home">
          <span className={Styles.bn39span}>Home</span>
        </Link>
      </div>
    </div>
  );
};

export default DetailComponent;
