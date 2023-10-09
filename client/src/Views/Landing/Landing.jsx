import {Link} from "react-router-dom";
import Styles from  "./landing.module.css"

const Landing = () => {
    return (
        <div className={Styles.landingCointainer}>
        <h1>PI Countries by Mariano Aguirre</h1>
        <Link id={Styles.link} to={"/home"}>
        <div className={Styles.bn39} href="/"><span className={Styles.bn39span}>Home</span></div>
        </Link>
        </div>
    );
}

export default Landing;