import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {getCountryDetail} from "../../Redux/actions";
import DetailComponent from "../../Components/Detail/DetailComponent";

const Detail = () => {

    const dispatch = useDispatch();
    const countryData = useSelector((state) => state.countryDetail);
    const {detailId} = useParams();
    const [selectedActivity, setSelectedActivity] = useState(null);

    useEffect(() =>{
        dispatch(getCountryDetail(detailId));
    }, [dispatch, detailId]);


    return(
        <div>
            <DetailComponent
            countryData={countryData}
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
            />
        </div>
    )
}

export default Detail;