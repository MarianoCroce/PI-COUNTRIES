import { Link } from "react-router-dom";


const ActivitiesComponent = (props) => {
    const {activities, handleDelete} = props;

    console.log(activities)

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
                    <p>Countries: {activity.Countries.map((country, countryIndex) => country.name).join(', ')}</p>
                </div>
            ))}

            <div>
                
                <Link to={"/home"}><button>Home</button></Link> 
            </div>

        </div>
    )

}

export default ActivitiesComponent;