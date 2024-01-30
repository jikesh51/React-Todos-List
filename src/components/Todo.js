import React from "react";

export default function Todo({ todo, onDelete }) {
  return (
    <div
      className="card"
      style={{
        width: "30%",
        margin: "10px",
        height: "350px",
        overflow: "auto",
        padding: "10px",
        float: "left",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
