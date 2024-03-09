const express = require("express");
const morgan = require("morgan");

const todosRoutes = require("./app/routes/todosRoutes");
const client = require("./app/config/db");

const app = express();
const port = 3000;
app.use(express.json());
app.use((req, res, next) => {
  console.log("middleware1 executed");
  next();
});
const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms"
);

app.use(morganMiddleware);
app.use("/todos", todosRoutes);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
