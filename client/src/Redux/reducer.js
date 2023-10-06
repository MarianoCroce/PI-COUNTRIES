import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  SEARCH_COUNTRIES,
  CLEAR_SEARCH,
  CLEAR_DETAIL,
  POST_ACTIVITY,
  GET_ACTIVITIES,
  DELETE_ACTIVITY,
  FILTER,
} from "./action-types";

const initialState = {
  countries: [],
  allCountries: [],
  countryDetail: [],
  searchResults: [],
  activities: [],
  filtered: { order: "name", population: "", continents: "", activities: "" },
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case SEARCH_COUNTRIES:
      return {
        ...state,
        searchResults: action.payload,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        searchResults: [],
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        countryDetail: [],
      } 

    case POST_ACTIVITY:
      return {
        ...state,
        countries: state.countries.map((country) => {
          if (country.id === action.payload.id) {
            return {
              ...country,
              activities: [...country.Activities, action.payload],
            };
          } else {
            return country;
          }
        }),
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload
        ),
      };

      case FILTER:
        const { filterType, value } = action.payload;
        const filtered = { ...state.filtered, [filterType]: value };
      
        let countriesFiltered = [...state.allCountries];
      
        if (filtered.continents) {
          countriesFiltered = countriesFiltered.filter(
            (country) => country.continents === filtered.continents
          );
        }
        if (filtered.activities) {
          countriesFiltered = countriesFiltered.filter((country) =>
            country.Activities.some((activity) => activity.name === filtered.activities)
          );
        }
        if (filtered.order === "asc") {
          countriesFiltered.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          countriesFiltered.sort((a, b) => b.name.localeCompare(a.name));
        }
      
        if (filtered.population === "asc") {
          countriesFiltered.sort((a, b) => a.population - b.population);
        } else if (filtered.population === "desc") {
          countriesFiltered.sort((a, b) => b.population - a.population);
        }
      
        return {
          ...state,
          countries: countriesFiltered,
          filtered: filtered,
        };
    
          default:
              return { ...state };
          }
      };

      export default rootReducer;
        