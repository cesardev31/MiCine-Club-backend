import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../model/user.js";

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Usuario no encontrado.");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Contraseña incorrecta.");
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return { user, token };
};

export default authenticateUser;
