import React, { FC, createElement, useState } from "react";

import { Comment, Avatar, Tooltip } from "antd";

import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";

import moment from "moment";

import { UTC_DATETIME } from "src/constants/time";

const LIKED = "LIKED";
const DISLIKED = "DISLIKED";

const SingleComment: FC<SingleCommentProps> = ({
  text,
  author,
  onLike,
  onDislike,
  likes,
  dislikes,
  created,
}) => {
  //   const [likes, setLikes] = useState(0);
  //   const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={() => onLike}>
        {createElement(action === LIKED ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={() => onDislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="user" />}
      content={<p>{text}</p>}
      datetime={
        // @ts-ignore comment
        <Tooltip>
          <span>{moment(created, UTC_DATETIME).fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

type SingleCommentProps = {
  text: string;
  author: string;
  onLike: Function;
  onDislike: Function;
  likes: number;
  dislikes: number;
  created: number;
};

export default SingleComment;
