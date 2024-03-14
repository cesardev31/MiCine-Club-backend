import sequelize from "./database.js";
import User from "../model/user.js";

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");

    await sequelize.sync({ force: true }); // ¡Cuidado con `force: true`, ya que puede borrar tus tablas existentes!
    console.log("Todos los modelos fueron sincronizados correctamente.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
};

export default initDatabase;
