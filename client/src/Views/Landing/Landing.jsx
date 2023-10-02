import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <div>
        <h1>PI Countries by Mariano Aguirre</h1>
        <Link to={"/home"}>
        <button>Home</button>
        </Link>
        </div>
    );
}

export default Landing;