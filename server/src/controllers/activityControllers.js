const {Activity} = require("../db.js");
const {Country} = require("../db.js");

const createActivityController = async (name, difficulty, duration, season, countries) => {
    
    if(!countries || countries.length === 0) {
        throw new Error("The activity must have at least one country");
    }

    const existingActivity = await Activity.findOne({
        where: {name}
    });

    if(existingActivity) {
        await existingActivity.addCountries(countries);
        return existingActivity;
    } else {
        const newActivity = await Activity.create({
            name, difficulty, duration, season,
        });
        
        await newActivity.addCountries(countries);
        return newActivity;
    }
};

const getActivitiesController = async () => {
    const activities = await Activity.findAll({
        include: {
            model: Country,
            attributes: ["name"],
            through: {attributes: []},
        },
    });
    return activities;
};

const deleteActivityController = async (id) => {
    const activity = await Activity.findByPk(id);
    if(!activity) {
        throw new Error("The activity does not exist");
    }
    await activity.destroy();
    return activity;
}

module.exports = {createActivityController, getActivitiesController, deleteActivityController}