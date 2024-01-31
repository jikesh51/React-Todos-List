import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

const App = () => {
  let data = {
    title: "Todos List",
    nav1: "Home",
    nav2: "About",
  };

  let initTodo;
  if (!localStorage.getItem("todos")) {
    initTodo = [];
  } else {
    initTodo = localStorage.getItem("todos");
    initTodo = JSON.parse(initTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    let i = todos.indexOf(todo);
    todos.splice(i, 1);
    setTodos([...todos]);
  };

  return (
    <div>
      <Router>
        <Navbar data={data} />
        <Routes>
          <Route
            name="home"
            exact
            path="/"
            element={
              <Todos
                todos={todos}
                setTodos={setTodos}
                onDelete={onDelete}
              />
            }
          />
          <Route
            name="addTodo"
            exact
            path="/create-todo"
            element={<AddTodo setTodos={setTodos} todos={todos} />}
          />
          <Route
            name="editTodo"
            exact
            path="/edit-todo/:id"
            element={
              <AddTodo setTodos={setTodos} todos={todos} />
            }
          />
          <Route name="about" exact path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
