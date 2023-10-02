import { Link } from "react-router-dom";

export default Card = (props) => {
    return (
        <Link to={`/detail/${props.id}`}>
        <img src={props.flags} alt="flag" />
        <h1>{props.name}</h1>
        <h2>{props.continent}</h2>
        </Link>
    );
}