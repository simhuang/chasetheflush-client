import React, { FC, useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { Input, Form } from "antd";

import { showModal, hideModal } from "src/reducers/modal";

import { getComments, ADD_COMMENT } from "src/api/paths";

import PrimaryButton from "src/components/PrimaryButton";
import CommentModal from "src/modals/commentModal";
import { create } from "src/api/apiHelper";
import SingleComment from "src/components/Comment";

const { TextArea } = Input;

const PostContainer: FC<PostContainerTypes> = ({ post }) => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState<any[]>([]);
  const [comment, setComment] = useState("");

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
        <SingleComment
          key={comment.id}
          author={"Simon Huang"}
          onLike={() => {}}
          onDislike={() => {}}
          text={comment.comment}
          likes={comment.upvotes}
          dislikes={0}
          created={comment.created}
        />
      );
    });
  };

  const addComment = async () => {
    const newComment = await create(ADD_COMMENT, {
      userId: 6,
      discussionId: 11,
      content: comment,
    });

    setComments([newComment, ...comments]);
  };

  const commentOnChange = (e: any) => {
    setComment(e.target.value);
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
      <>
        <Form.Item>
          <TextArea rows={1} onChange={commentOnChange} value={comment} />
        </Form.Item>
        <Form.Item>
          <PrimaryButton
            name="Add Comment"
            htmlType="submit"
            onClick={addComment}
          />
        </Form.Item>
      </>
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
