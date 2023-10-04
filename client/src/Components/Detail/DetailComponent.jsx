import {Link} from "react-router-dom";

const DetailComponent = (props) => {
    const {isLoading, countryData, selectedActivity, setSelectedActivity} = props;
    

    return (
        <div>
            {countryData && (
                <div key={countryData.id}>
                    <h1>Name: {countryData.name}</h1>
                    <h2>ID: {countryData.id}</h2>
                    <img src={countryData.image} alt={countryData.name}/>
                    <h2>Continent: {countryData.continents}</h2>
                    <h2>Capital: {countryData.capital}</h2>
                    <h2>Subregion: {countryData.subregion}</h2>
                    <h2>Area: {countryData.area}</h2>
                    <h2>Population: {countryData.population} inhabitants</h2>
                    <h2>
                        Activities:{" "}
                        {countryData.activities && countryData.activities.length > 0 ? (
                            countryData.activities.map((activity) => (
                                <ul key={activity.id}>
                                    <li
                                        onMouseOver={() => setSelectedActivity(activity)}
                                        onMouseOut={() => setSelectedActivity(null)}
                                    >{`${activity.name}`}</li>
                                </ul>
                            ))) : (
                                <span>No available activities</span>
                        )}
                        {selectedActivity && (
                            <div>
                            <p>Difficulty: {selectedActivity.difficulty}</p>
                            <p>Duration: {selectedActivity.duration}</p>
                            <p>Season: {selectedActivity.season}</p>
                            </div>
                        )}
                    </h2>
                </div>
            )}
            <div>
                <Link to={"/home"}><button>Home</button></Link>
            </div>
        </div>
    )
}

export default DetailComponent;
