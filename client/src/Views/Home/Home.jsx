import Cards from "../../Components/Cards/Cards";
import Styles from "./home.module.css";

const Home = () => {
    return (
        <div className={Styles.homeContainer}>
            <Cards/>
        </div>
    )
}

export default Home;