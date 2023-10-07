import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActivity } from "../../Redux/actions";
import FormComponent from "../../Components/Form/FormComponent";
import Styles from "./form.module.css";

const Form = ({ countries }) => {

  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);

  const [input, setInput] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "Summer",
    countries: [],
  });

  const [success, setSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    other: "",
    name: "*",
    countries: "*",
  });

  const handleChange = (event) => {
    let value = event.target.value;

    if (event.target.name === "name") {
      if (!/^[a-zA-Z]{4,10}$/.test(value)) {
        setErrorMessage({
          ...errorMessage,
          name: "The name must be between 4 and 10 characters long and must only contain letters ",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          name: "",
        });
      }
      value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    setInput({
      ...input,
      [event.target.name]: value,
    });
  };

  const handleCountrySelect = (country) => {
    if (!input.countries.includes(country.id)) {
      setInput({
        ...input,
        countries: [...input.countries, country.id],
      });
    }

    if (input.countries.length >= 0)
      setErrorMessage({
        ...errorMessage,
        countries: "",
      });
  };


const handleCountryRemove = (index) => {
  setInput({
    ...input,
    countries: input.countries.filter((_, i) => i !== index),
  });
  input.countries.length > 1
    ? setErrorMessage({
        ...errorMessage,
        countries: "",
      })
    : setErrorMessage({
        ...errorMessage,
        countries: "One country must be selected",
      });
};

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();

  try {
    dispatch (postActivity(input));
    setSuccess(true);
    setErrorMessage({
      ...errorMessage,
      other: "",
    });
  } catch (error) {
    setErrorMessage({
      ...errorMessage,
      other: `${error}`,
    });
  }
};

const filteredCountries = countriesState.filter((country) =>
  country.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
    <div className={Styles.formContainer}>
        <FormComponent
        handleChange={handleChange}
        handleCountrySelect={handleCountrySelect}
        handleCountryRemove={handleCountryRemove}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        input={input}
        searchTerm={searchTerm}
        filteredCountries={filteredCountries}
        success={success}
        />
    </div>
)
};

export default Form;
