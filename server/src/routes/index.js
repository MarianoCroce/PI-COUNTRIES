const { Router } = require("express");
const {getCountriesHandler, getCountryByIdHandler} = require("../handlers/countryHandlers");
const {postActivityHandler, getActivitiesHandler, deleteActivityHandler} = require("../handlers/activitiesHandlers")


const router = Router();

router.get("/countries/name?=", getCountriesHandler);
router.get("/countries", getCountriesHandler);
router.get("/countries/:id", getCountryByIdHandler);
router.post("/activities", postActivityHandler);
router.get("/activities", getActivitiesHandler);
router.delete("/activities/:id", deleteActivityHandler)


module.exports = router;
