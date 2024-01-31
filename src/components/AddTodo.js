import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddTodo(props) {
  const [formValues, setFormValues] = useState({
    title: "",
    desc: "",
  });
  const params = useParams();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateValues = () => {
    let errors = {};
    if (formValues?.title.trim() === "") {
      errors.titleRequired = "Title is required";
    }
    if (formValues?.desc.trim() === "") {
      errors.descRequired = "Description is required";
    }
    if (formValues?.title.length > 30) {
      errors.title = "Title Should not exceed 30 characters";
    }
    if (formValues?.desc.length > 0 && formValues.desc.length < 10) {
      errors.desc = "Description should more than 10 characters";
    }
    if (Object.keys(errors).length === 0) {
      if (!editTodo) {
        let todo = {
          title: formValues?.title,
          desc: formValues?.desc,
        };
        let num = props.todos.length + 1;
        todo["sNo"] = num;
        props.setTodos([...props.todos, todo]);
      } else {
        let index = props.todos.indexOf(editTodo);
        props.todos[index]["title"] = formValues?.title;
        props.todos[index]["desc"] = formValues?.desc;
      }
      localStorage.setItem("todos", JSON.stringify(props.todos));
      navigate("/");
    }
    return errors;
  };

  let editTodo;
  if (params && params.id) {
    editTodo = props.todos.find((o) => {
      return o.sNo === parseInt(params.id);
    });
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  // Submit the form to add a new todo item.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues) {
      setErrors(validateValues());
    } else {
      alert("Please fill the form");
    }
  };

  useEffect(() => {
    setFormValues(editTodo);
  }, [editTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(props.todos));
  }, [props.todos]);

  return (
    <div
      className="container mt-3"
      style={{ overflow: "auto", marginBottom: "50px" }}
    >
      <h4>{!params.id ? "Create Todo" : "Update Todo"}</h4>
      <hr />
      <div className="col-md-6 my-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              value={formValues?.title || ""}
              className="form-control"
              id="title"
              aria-describedby="Title"
              onChange={handleChange}
            />
            {errors.titleRequired && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.titleRequired}
              </div>
            )}
            {errors.title && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.title}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              value={formValues?.desc || ""}
              className="form-control"
              id="desc"
              onChange={handleChange}
              style={{ minHeight: "100px" }}
            />
            {errors.descRequired && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.descRequired}
              </div>
            )}
            {errors.desc && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.desc}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
