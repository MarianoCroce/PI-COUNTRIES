import {Routes, Route, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { getCountries, getActivities } from "./Redux/actions";
import Landing from "./Views/Landing/Landing";  
import Home from "./Views/Home/Home";
import Detail from "./Views/Detail/DetailView";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {

  const {pathName} = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
    </div>
  );
}
  
export default App
