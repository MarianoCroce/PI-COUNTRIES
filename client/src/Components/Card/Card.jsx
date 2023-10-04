import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt="flag" />
        <h1>{props.name}</h1>
        <h2>{props.continents}</h2>
        </Link>
    );
}

export default Card;