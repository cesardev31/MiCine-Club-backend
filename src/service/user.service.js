import User from "../model/user.js";
import bcrypt from "bcryptjs";

const createUser = async ({ username, email, password }) => {
  try {
    // Comprobar si el correo ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      // Puedes lanzar un error o manejarlo de otra manera
      throw new Error("El correo electrónico ya está en uso");
    } else {
      // Encriptar la contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Crear el usuario si el correo no existe
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      return user;
    }
  } catch (error) {
    throw error;
  }
};

export default {
  createUser,
};
