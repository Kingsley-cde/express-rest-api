const dotenv = require("dotenv");
dotenv.config();
exports.auth = () => (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) throw new Error("Invalid Authorization");
    if (!authorization.startswith("Bearer "))
      throw new Error("Invalid Authorization");
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
