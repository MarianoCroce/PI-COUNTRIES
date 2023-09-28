const {Activity} = require("../db.js");
const {Country} = require("../db.js");

const createActivityController = async (name, difficulty, durationHours, season, countries) => {

    const createdActivity = await Activity.findOne({
        where: {name}
    });
    if(createdActivity) {
        throw new Error("The activity already exists");
    }
    if(!countries || countries.length === 0) {
        throw new Error("The activity must have at least one country");
    }
    const newActivity = await Activity.create({
        name, difficulty, duration, season,
    });
    await newActivity.setCountries(countries);
    return newActivity;
};

