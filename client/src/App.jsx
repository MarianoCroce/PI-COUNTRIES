import {Routes, Route, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { getCountries, getActivities } from "./Redux/actions";
import Landing from "./Views/Landing/Landing";  

function App() {

  const {pathName} = useLocation();

  return (
    <div>

      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </div>
  );
}
  
export default App
