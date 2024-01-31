import React from "react";
import { useNavigate } from "react-router-dom";

export default function Todo({ todo, onDelete, todos }) {
  const navigate = useNavigate();
  const onEdit = (todo) => {
    let id  = todo.sNo;
    navigate(`/edit-todo/${id}`);
  }

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
          className="btn btn-info mx-2"
          onClick={() => {
            onEdit(todo);
          }}
        >
          Edit
        </button>
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
