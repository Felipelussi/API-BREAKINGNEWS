import user from "../Models/User.js";

const loginService = (email) =>
  user.findOne({ email: email }).select("+password");

export { loginService };
