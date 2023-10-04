import { useState } from "react";
import { postActivity } from "../../Redux/actions";
import FormComponent from "../../Components/Form/FormComponent";

const Form = ({postActivity, countries}) => {

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
    }

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
        }
}