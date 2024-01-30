import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTodo(props) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    title: "",
    desc: "",
  });
  const [errors, setErrors] = useState({});

  const validateValues = () => {
    let errors = {};
    if (formValues.title.trim() === "") {
      errors.titleRequired = "Title is required";
    }
    if (formValues.desc.trim() === "") {
      errors.descRequired = "Description is required";
    }
    if (formValues?.title?.length > 20) {
      errors.title = "Title is too long";
    }
    if (formValues?.desc?.length > 0 && formValues?.desc?.length < 5) {
      errors.desc = "Description is too short";
    }
    return errors;
  };

  // Submit the form to add a new todo item.
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues());
    if (Object.keys(errors).length === 0) {
      let todo = {
        title: formValues.title,
        desc: formValues.desc,
      };
      let num = props.todos.length + 1
      todo["sNo"] = num;
      props.setTodos([...props.todos, todo]);
      localStorage.setItem("todos", JSON.stringify(props.todos));
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(props.todos));
  }, [props.todos]);

  return (
    <div className="container my-3">
      <h4>Create Todo</h4>
      <hr />
      <div className="col-md-6 my-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              value={formValues.title || ""}
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
            <input
              type="text"
              value={formValues.desc || ""}
              className="form-control"
              id="desc"
              onChange={handleChange}
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
