import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearSearch } from "../../Redux/actions";

import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Styles from "./cards.module.css";

const Cards = () => {
    const dispatch = useDispatch();

    const countries = useSelector((state) => {
        return state.searchResults.length > 0
            ? state.searchResults
            : state.countries;
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);

    useEffect(() => {
        setCurrentPage(1);
        dispatch(clearSearch());
    }, [dispatch]);

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(
        indexOfFirstCountry,
        indexOfLastCountry
    );

    const pageNumbers = Math.ceil(countries.length / countriesPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (currentCountries.length === 0) {
        return <p>Network Error</p>;
    }

    return (
        <div className={Styles.cardsContainer}>
            <div className={Styles.cards}>
                {currentCountries.map((country) => (
                    <Card
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        image={country.image}
                        continents={country.continents}
                        className={Styles.card}
                    />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={pageNumbers}
                handlePageClick={handlePageClick}
            />
        </div>
    );
};

export default Cards;