const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Country', {

    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    maps: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subregion: {
      type: DataTypes.STRING,
    },

    area: {
      type: DataTypes.FLOAT,
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  });
};