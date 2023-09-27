const {getAllCountries, getCountryById,} = require("../controllers/countryControllers.js");

const getAllCountriesHandler = async (req, res) => {
    try {
        
        const allCountries = await getAllCountries();
        res.status(200).send(allCountries);

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

module.exports = {getAllCountriesHandler, getCountryByIdHandler};