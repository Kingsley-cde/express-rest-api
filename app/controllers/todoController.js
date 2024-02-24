const { request, response } = require("express");
const todoService = require("../services/todoService");

exports.getAllTodos = (req, res) => {
  const todos = todoService.getAllTodos();
  res.json(todos);
};
exports.getTodoById = (req, res) => {
  const todoId = req.params.id;
  const todo = todoService.getTodoById(todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "todo not found" });
  }
};
exports.createTodo = (req, res) => {
  const newTodo = req.body;
  const todo = todoService.createTodo(newTodo);
  res.json(todo);
};
exports.updateTodo = (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;
  const todo = todoService.updateTodo(todoId, updatedTodo);
  res.json(todo);
};
exports.deleteTodo = (req, res) => {
  const todoId = req.params.id;
  todoService.deleteTodo(todoId);
  res.json({ message: "todo deleted successfully" });
};
