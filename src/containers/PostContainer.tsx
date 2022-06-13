import React, { FC, useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { showModal, hideModal } from "src/reducers/modal";

import { getComments } from "src/api/paths";

import PrimaryButton from "src/components/PrimaryButton";
import CommentModal from "src/modals/commentModal";

const PostContainer: FC<PostContainerTypes> = ({ post }) => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState<any[]>([]);
  //   const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchComments();
    return () => {
      dispatch(hideModal());
    };
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

  const addComment = () => {
    dispatch(showModal());
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
      <PrimaryButton name="Add Comment" onClick={addComment} />
      <h3>comments</h3>
      {<div>{renderComments()}</div>}
      <CommentModal />
    </>
  );
};

type PostContainerTypes = {
  post: {
    title: string;
    content: string;
    upvotes: number;
    commentCount: number;
    created: any;
  };
};

export default PostContainer;
