const { Router } = require("express");
const {getAllCountriesHandler, getCountryByIdHandler} = require("../handlers/countryHandlers");


const router = Router();

router.get("/countries/name?=",);
router.get("/countries", getAllCountriesHandler);
router.get("/countries/:id", getCountryByIdHandler);
router.post("/activities",);
router.get("/activities",);


module.exports = router;
