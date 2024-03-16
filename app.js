import express from "express";
import { routerApi } from "./src/routes/index.js";
import initDatabase from "./src/config/init-db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//middlewares
app.use(express.json());

//se inicializan las rutas
routerApi(app);

const port = process.env.PORT;

initDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`servidor corriendo y escuchando en el puerto: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error al iniciar la base de datos:", err);
  });
