import { Link } from "react-router-dom";


const ActivitiesComponent = (props) => {
    const {activities, handleDelete} = props;

    return (
        <div>
            <div>
                <h1>Activities</h1>
            </div>
            {activities.map((activity, index) => (
                <div key={index}>
                    <button onClick={() => handleDelete(activity.id)}>X</button>
                    <h2>{activity.name}</h2>
                    <p>Difficulty: {activity.difficulty}</p>
                    <p>Duration: {activity.duration}</p>
                    <p>Season: {activity.season}</p>
                    <p>Countries: {activity.countries}</p>
                </div>
            ))}
            <div>
                <Link to={"/home"} />
            </div>

        </div>
    )

}

export default ActivitiesComponent;