import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { ADD_BLOG } from "../redux/actionTypes/actionTypes";

const AddBlog = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    // console.log(state.title);
    fetch("http://localhost:5000/api/add-blog", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/");
          toast.success("Blog Added SuccessFully");
        } else {
          toast.success("Something Wrong!");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="shadow rounded p-5">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Blog Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="title"
                  onChange={(e) =>
                    dispatch({
                      type: ADD_BLOG,
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="5"
                  onChange={(e) =>
                    dispatch({
                      type: ADD_BLOG,
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
