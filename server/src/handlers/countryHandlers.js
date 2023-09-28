const {getAllCountries, getCountryById, getCountryByName} = require("../controllers/countryControllers.js");

const getCountriesHandler = async (req, res) => {
    const {name} = req.query;
    try {
    if(name) {
        const queryName = await getCountryByName(name);
        res.status(200).send(queryName);
    } else {
        const allCountries = await getAllCountries();
        res.status(200).send(allCountries);
    }
    } catch (error) {
        res.status(500).send(error);
    }
};

const getCountryByIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        
        const reqId = await getCountryById(id);
        res.status(200).send(reqId);

    } catch (error) {
        res.status(500).send(error);
    }


}

module.exports = {getCountriesHandler, getCountryByIdHandler};