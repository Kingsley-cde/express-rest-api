const { request, response } = require("express");
const todoService = require("../services/todoService");

exports.getAllTodos = async (req, res) => {
  const todos = await todoService.getAllTodos();
  res.json(todos);
};
exports.getTodoById = async (req, res) => {
  const todoId = req.params.id;
  const todo = await todoService.getTodoById(todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "todo not found" });
  }
};
exports.createTodo = async (req, res) => {
  const newTodo = req.body;
  const todo = await todoService.createTodo(newTodo);
  res.json(todo);
};
exports.updateTodo = async (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;
  const todo = await todoService.updateTodo(todoId, updatedTodo);
  res.json(todo);
};
exports.deleteTodo = async (req, res) => {
  const todoId = req.params.id;
  await todoService.deleteTodo(todoId);
  res.json({ message: "todo deleted successfully" });
};
