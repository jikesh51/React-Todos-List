import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div className="container" style={{overflow: "auto", paddingBottom: "70px"}}>
      <h3 className="text-center my-3">Todos List</h3>
      <hr />
      <div className="my-3">
        {props.todos.length > 0 ? (
          props.todos.map((todo) => {
            return (
              <Todo todo={todo} todos={props.todos} key={todo.sNo} onDelete={props.onDelete} />
            );
          })
        ) : (
          <div>No Todos to Display.</div>
        )}
      </div>
    </div>
  );
}
