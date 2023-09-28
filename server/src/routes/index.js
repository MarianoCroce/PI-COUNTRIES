const { Router } = require("express");
const {getCountriesHandler, getCountryByIdHandler} = require("../handlers/countryHandlers");


const router = Router();

router.get("/countries/name?=", getCountriesHandler);
router.get("/countries", getCountriesHandler);
router.get("/countries/:id", getCountryByIdHandler);
router.post("/activities",);
router.get("/activities",);


module.exports = router;
