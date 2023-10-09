import { Link } from "react-router-dom";
import Styles from "./card.module.css";

const Card = (props) => {
    return (
        <Link id={Styles.cardContainer} to={`/detail/${props.id}`}>
            <img id={Styles.img} src={props.image} alt="flag" />
            <div id={Styles.cardContent}>
                <h1>{props.name}</h1>
                <h2>{props.continents}</h2>
            </div>
        </Link>
    );
}

export default Card;
