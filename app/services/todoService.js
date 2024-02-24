const fs = require("fs");
const path = require("path");

const datafilepath = path.join(__dirname, "../../data/todos.json");
exports.getAllTodos = () => {
  const todos = fs.readFileSync(datafilepath);
  return JSON.parse(todos);
};
exports.getTodoById = (id) => {
  const todos = this.getAllTodos();
  const todo = todos.find((element) => element.id === id);
  return todo;
};
exports.createTodo = (newTodo) => {
  const todos = this.getAllTodos();
  const todoId = toString(Math.floor(Math.random() * 1000));
  newTodo.id = todoId;
  todos.push(newTodo);
  fs.writeFileSync(datafilepath, JSON.stringify(todos, null, 2));
  return newTodo;
};
exports.updateTodo = (id, updatedTodo) => {
  const todos = this.getAllTodos();
  const index = todos.findIndex((element) => element.id === id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    fs.writeFileSync(datafilepath, JSON.stringify(todos, null, 2));
    return todos[index];
  } else {
    return null;
  }
};
exports.deleteTodo = (id) => {
  let todos = this.getAllTodos();
  todos = todos.filter((element) => element.id !== id);
  fs.writeFileSync(datafilepath, JSON.stringify(todos, null, 2));
};
