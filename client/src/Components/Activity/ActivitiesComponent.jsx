import { Link } from "react-router-dom";
import Styles from "./activitiesComponent.module.css";

const ActivitiesComponent = (props) => {
  const { activities, handleDelete } = props;

  

  return (
    <div>
      <div>
        <h1>Activities</h1>
      </div>
      {activities.map((activity, index) => (
        <div key={index} className={Styles.activityContainer}>
          <h2>{activity.name}</h2>
          <p>Difficulty: {activity.difficulty}</p>
          <p>Duration: {activity.duration}</p>
          <p>Season: {activity.season}</p>
          <p>Countries: {activity.Countries.map((country, countryIndex) => country.name).join(", ")}</p>
          <button className={Styles.bn39} onClick={() => handleDelete(activity.id)}>
            X
          </button>
        </div>
      ))}

      <div>
        <Link to={"/home"} className={Styles.bn39} href="/home">
          <span className={Styles.bn39span}>Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ActivitiesComponent;
