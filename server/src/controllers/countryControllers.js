const { Country } = require("../db.js");
const { Activity } = require("../db.js");
const { Op } = require("sequelize");

const getAllCountries = async () => {
    const countries = await Country.findAll({
        include: { 
            model: Activity,
            through: {attributes: []}
        },
    });
    return countries;
};

const getCountryById = async (id) => {
    const country = await Country.findAll({
        where: {
            id: id.toUpperCase(),
        },
        include: {
            model: Activity,
            through: {attributes: []}
        },
    });
    return country;
};




module.exports = {getAllCountries, getCountryById,};
