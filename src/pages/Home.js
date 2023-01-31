import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";

const Home = () => {
  const state = useSelector((state) => state)
  
  console.log(state)
  return (
    <div className="container">
      <div className="mt-3">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 ">
            <Card />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 ">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
