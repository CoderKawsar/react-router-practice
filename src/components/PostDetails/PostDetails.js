import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  return (
    <div>
      <h3>Post Details: {postId}</h3>
      <h5>Post Title: {post.title}</h5>
      <p>Post Body: {post.body}</p>
    </div>
  );
};

export default PostDetails;
