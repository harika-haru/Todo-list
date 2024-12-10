import { useState } from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import Form from "./Form";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodo= todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodo={totalTodo} />
    </div>
  );
}
