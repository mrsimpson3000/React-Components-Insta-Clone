// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  const [likes, setLikes] = useState(props.postContent.likes);
  const addLikes = () => {
    setLikes(likes + 1);
  };
  // set up state for the likes

  return (
    <div className='post-border'>
      <PostHeader
        username={props.postContent.username}
        thumbnailUrl={props.postContent.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.postContent.imageUrl}
        />
      </div>
      <LikeSection addLikes={addLikes} likes={likes} />
      <CommentSection
        postId={props.postContent.imageUrl}
        comments={props.postContent.comments}
      />
    </div>
  );
};

export default Post;
