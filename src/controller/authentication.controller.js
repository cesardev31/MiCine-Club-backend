import authenticateUser from "../service/authentication.service.js";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authenticateUser(email, password);
    res.json({ message: "Autenticación exitosa.", token, userId: user.id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default { loginUser };
