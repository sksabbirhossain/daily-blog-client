import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://server-eight-sooty.vercel.app/api/blog-update/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.data));
  }, [id]);
  console.log(details);
  return (
    <div className="container mt-3">
      <h3 className="shadow rounded text-center py-2">Details</h3>
      <div className="mt-3">
        <h5>{details?.title}</h5>
        <p>{details?.description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
