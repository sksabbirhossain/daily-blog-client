import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card";
import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESS,
} from "../redux/actionTypes/actionTypes";

const Home = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.allBlog);

  useEffect(() => {
    dispatch({ type: FETCHING_START });
    fetch("https://server-eight-sooty.vercel.app/api/all-blog")
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCHING_SUCCESS, payload: data.data }))
      .catch(() => {
        dispatch({ type: FETCHING_ERROR });
      });
  }, []);
  console.log(blogs);
  return (
    <div className="container">
      <div className="mt-3">
        <div className="row">
          {blogs?.map((blog) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={blog._id}>
              <Card blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
