require("dotenv").config();
const { Sequelize } = require("sequelize");
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const CountryModel = require("./models/Country");
const ActivityModel = require("./models/Activity");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
})

CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, {through: "country_activities"});
Activity.belongsToMany(Country, {through: "country_activities"});



module.exports = {
  ...sequelize.models,
  Country,
  Activity,
  conn: sequelize,     
};