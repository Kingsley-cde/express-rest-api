const { UserModel } = require("../models/User");
const {
  createPassword,
  createToken,
  verifyPassword,
} = require("../utils/User");

const signUp = async (username, password) => {
  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      return null;
    } else {
      const hashedPassword = await createPassword(password);
      const newuser = await UserModel.create({
        username,
        password: hashedPassword,
      });
      return newuser;
    }
  } catch (err) {
    return err.message;
  }
};
const login = async (username, password) => {
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      return null;
    } else {
      const isValid = await verifyPassword(password, user.password);
      if (!isValid) {
        return null;
      } else {
        const token = await createToken(user);
        return token;
      }
    }
  } catch (err) {
    return err.message;
  }
};

const getuserprofile = async (id) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return null;
    } else {
      return user;
    }
  } catch (err) {
    return err.message;
  }
};

exports.userService = { signUp, login, getuserprofile };
