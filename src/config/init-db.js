import sequelize from "./database.js";
import User from "../model/user.js";

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");

    await sequelize.sync();
    console.log("Todos los modelos fueron sincronizados correctamente.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
};

export default initDatabase;
