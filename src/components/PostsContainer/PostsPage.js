//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  const [data] = useState(dummyData);
  return (
    <div className='posts-container-wrapper'>
      {data.map((userPost, index) => (
        <Post key={index} postContent={userPost} />
      ))}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
