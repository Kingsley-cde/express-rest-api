const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

exports.auth = (req, res, next) => {
  try {
    console.log("authorization middleware");
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer")) {
      return res.status(401).json({ msg: "Invalid Authorization" });
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// const dotenv = require("dotenv");
// dotenv.config();
// exports.auth = () => (req, res, next) => {
//   try {
//     const authorization = req.headers.authorization;
//     if (!authorization) throw new Error("Invalid Authorization");
//     if (!authorization.startswith("Bearer "))
//       throw new Error("Invalid Authorization");
//     const token = authorization.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
