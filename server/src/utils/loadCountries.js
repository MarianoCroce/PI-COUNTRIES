const axios = require('axios');
const { Country } = require('../db')

const loadCountries = async () => {
    const url = 'http://localhost:5000/countries';
    try{

        const { data } = await axios(url);
        for (let i = 0; i < data.length; i++) {
            let countryInfo = {
                name: data[i].name.official,
                id: data[i].cca3,
                area: data[i].area,
                image: data[i].flags.png,
                maps: data[i].maps.openStreetMaps,
                population: data[i].population,
                continents: data[i].continents[0],
                subregion: data[i].subregion,
                capital: data[i].capital
            }
            
            await Country.findOrCreate({
                where: {
                    name: countryInfo.name,
                    id: countryInfo.id,
                    area: countryInfo.area,
                    image: countryInfo.image,
                    maps: countryInfo.maps,
                    population: countryInfo.population,
                    continents: countryInfo.continents,
                    subregion: countryInfo.subregion === undefined ? 'null' : countryInfo.subregion,
                    capital: countryInfo.capital === undefined ? 'null' : countryInfo.capital[0] 
                },

            });

        };
        return data
    }
    catch(error){console.log(error.message)}
};

module.exports = loadCountries;