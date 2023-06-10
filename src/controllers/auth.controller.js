import bcrypt from "bcrypt";
import { loginService } from "../services/auth.Service.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginService(email);

    if(!user){
        return res.status(400).send({message: "User or Password not!"})
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if(!passwordIsValid){
        return res.status(400).send({message: "User or Password not!"})
    }

  
    res.send("Login ok");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { login };
