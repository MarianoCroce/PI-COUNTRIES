import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  SEARCH_COUNTRIES,
  CLEAR_SEARCH,
  POST_ACTIVITY,
  GET_ACTIVITIES,
  DELETE_ACTIVITY,
  FILTER,
//   SORT_BY_NAME,
//   SORT_BY_POPULATION,
//   FILTER_BY_CONTINENT,
//   FILTER_BY_ACTIVITY,
} from "./action-types";

import axios from "axios";

export const getCountries = () => {
    return async function (dispatch) {
        try {
            return await axios.get("/countries").then((res) => {
                dispatch({type: GET_COUNTRIES, payload: res.data});
            })
        } catch (error) {
            throw new Error(error.response + "please contact support for this error");
        }
    }
}

export const getCountryDetail = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/countries/${id}`);
            dispatch({type: GET_COUNTRY_DETAIL, payload: response.data});
        } catch (error) {
            throw new Error(error.response + "please contact support for this error");
        }
    }
}

export const searchCountries = (query) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/countries?name=${query}`);
            dispatch({type: SEARCH_COUNTRIES, payload: response.data});
        } catch (error) {
            throw new Error(error.response + "please contact support for this error");
        }
    }
}

export const clearSearch = () => {
    return {type: CLEAR_SEARCH};
}

export const postActivity = (activity) => {
    return async function (dispatch) {
        try {
            const response = await axios.post("/activities", activity);
            dispatch({type: POST_ACTIVITY, payload: response.data});
        } catch (error) {
            throw new Error(error.response + "please contact support for this error");
        }
    }
}

export const getActivities = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get("/activities");
            dispatch({type: GET_ACTIVITIES, payload: response.data});
        } catch (error) {
            throw new Error(error.response + "please contact support for this error");
        }
    }
}

export const deleteActivity = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.delete(`/activities/${id}`);
            dispatch({type: DELETE_ACTIVITY, payload: response.data});
        } catch (error) {
            throw new Error(error.response + "please contact support for this error");
        }
    }
}

// export const sortByName = (order) => {
//     return {type: SORT_BY_NAME, payload: order}
// }

// export const sortByPopulation = (order) => {
//     return {type: SORT_BY_POPULATION, payload: order}
// }

// export const filterByContinent = (continents) => {
//     return {type: FILTER_BY_CONTINENT, payload: continents}
// }

// export const filterByActivity = (activity) => {
//     return {type: FILTER_BY_ACTIVITY, payload: activity}
// };

export const combinedFilter = (filterType, value) => {
    return {type: FILTER, payload: {filterType, value}}
}