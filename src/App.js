import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layouts/Main/Main";
import AddBlog from "./pages/AddBlog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReadingHistory from "./pages/ReadingHistory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/reading-history" element={<ReadingHistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
