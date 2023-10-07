import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivity } from "../../Redux/actions";
import ActivitiesComponent from "../../Components/Activity/ActivitiesComponent";
import Styles from "./activitiesView.module.css";

const Activities = () => {

    const activities = useSelector((state) => state.activities);
    const dispatch = useDispatch();

    const handleDelete = useCallback(
        (id) => {
            if (window.confirm("Do you really want to delete this activity?")) {
                dispatch(deleteActivity(id));
                window.location.reload();
            }
        }, [dispatch]
    );

    return (
        <div className={Styles.activitiesContainer}>
            <ActivitiesComponent activities={activities} handleDelete={handleDelete} />
        </div>
    )
}

export default Activities;