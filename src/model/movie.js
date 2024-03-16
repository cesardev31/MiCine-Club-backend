import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  releaseDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

export default Movie;
