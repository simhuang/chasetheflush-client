import React, { FunctionComponent, useEffect, useState } from "react";

import { getComments } from "src/api/paths";

const PostContainer: FunctionComponent<PostContainerTypes> = ({ post }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch(getComments(0));
    const comments = await response.json();
    setComments(comments.data);
  };

  const renderComments = () => {
    return comments.map((comment) => {
      return (
        <div key={comment.id}>
          <div>{comment.comment}</div>
          <div>{comment.upvotes}</div>
        </div>
      );
    });
  };

  return (
    <>
      <h3>post</h3>
      <div>{post.title}</div>
      <div>{post.content}</div>
      <div>{post.upvotes}</div>
      <div>{post.commentCount}</div>
      <div>{post.created}</div>
      <br />
      <h3>comments</h3>
      {<div>{renderComments()}</div>}
    </>
  );
};

type PostContainerTypes = {
  post: Object;
};

export default PostContainer;
