import {Link} from "react-router-dom";
import Style from  "./landing.module.css"

const Landing = () => {
    return (
        <div className={Style.landingCointainer}>
        <h1>PI Countries by Mariano Aguirre</h1>
        <Link id={Style.link} to={"/home"}>
        <div  className={Style.bn39} href="/"><span className={Style.bn39span}>Home</span></div>
        </Link>
        </div>
    );
}

export default Landing;