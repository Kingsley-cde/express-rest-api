const { TodoModel } = require("../models/Todo");

exports.getAllTodos = async () => {
  const todos = await TodoModel.find();
  if (!todos) {
    return null;
  } else {
    return todos;
  }
};
exports.getTodoById = async (id) => {
  const todo = await TodoModel.findById(id);
  if (!todo) {
    return null;
  } else {
    return todo;
  }
};
exports.createTodo = async (newTodo) => {
  const todo = await TodoModel.create(newTodo);
  return todo;
};
exports.updateTodo = async (id, updatedTodo) => {
  const todo = await TodoModel.findByIdAndUpdate(id, updatedTodo);
  if (!todo) {
    return null;
  } else {
    return todo;
  }
};
exports.deleteTodo = async (id) => {
  const todo = await TodoModel.findByIdAndDelete(id);
};
