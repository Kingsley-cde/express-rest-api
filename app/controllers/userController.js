const { userService } = require("../services/userService");

const signupHandler = async (req, res) => {
  const { username, password } = req.body;
  const user = await userService.signUp(username, password);
  if (user) {
    return res
      .status(201)
      .json({ message: "user created successfully", data: user });
  } else {
    return res.status(400).json({ message: "user already exists" });
  }
};
const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  const token = await userService.login(username, password);
  if (token) {
    return res
      .status(201)
      .json({ message: "user logged in successfully", data: token });
  } else {
    return res.status(400).json({ message: "invalid credentials" });
  }
};
const profileHandler = async (req, res) => {
  const user = await userService.getuserprofile(req.userId);
  if (user) {
    return res
      .status(201)
      .json({ message: "profile retrieve successfully", data: user });
  } else {
    return res.status(400).json({ message: "user does not exist" });
  }
};

exports.userController = { signupHandler, loginHandler, profileHandler };
