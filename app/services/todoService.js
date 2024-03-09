const { ObjectId } = require("mongodb");
const client = require("../config/db");

// const datafilepath = path.join(__dirname, "../../data/todos.json");
const database = client.db("todos_api_database");
const collection = database.collection("todos");

exports.getAllTodos = async () => {
  const todos = await collection.find().toArray();
  return todos;
};
exports.getTodoById = async (id) => {
  const todo = await collection.findOne({ _id: new ObjectId(id) });
  return todo;
};
exports.createTodo = async (newTodo) => {
  const todo = await collection.insertOne(newTodo);
  return todo;
};
exports.updateTodo = async (id, updatedTodo) => {
  const todo = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updatedTodo },
    { returnDocument: "after" }
  );
  return todo;
};
exports.deleteTodo = async (id) => {
  await collection.deleteOne({ _id: new ObjectId(id) });
};
