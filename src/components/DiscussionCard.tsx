import React, { FunctionComponent } from "react";

import PropTypes from "prop-types";

import { Card, Avatar, Button } from "antd";
import { LikeFilled, EyeFilled, MessageFilled } from "@ant-design/icons";
import { PRIMARY_GREEN } from "src/constants/style";

const { Meta } = Card;

const DiscussionCard: FunctionComponent<DiscussionCardProps> = ({
  user,
  content,
  upvotes,
  commentCount,
  views,
  title,
  onClick,
}) => (
  <Card
    hoverable
    onClick={(e) => onClick(e)}
    style={{
      marginBottom: "24px",
      borderRadius: "8px",
    }}
    extra={<div style={{ fontSize: "10px" }}>5 minutes ago</div>}
    title={`${user.firstName} ${user.lastName}`}
  >
    <h3>{title}</h3>
    <p style={{ fontSize: "16px" }}>{content}</p>
    <div style={{ display: "flex", gap: "8px" }}>
      <span>
        <LikeFilled style={{ fontSize: "18px" }} />
        <p style={{ display: "inline", marginLeft: "4px", fontSize: "18px" }}>
          {upvotes}
        </p>
      </span>
      <span>
        <EyeFilled style={{ fontSize: "18px" }} />
        <p style={{ display: "inline", marginLeft: "4px", fontSize: "18px" }}>
          {views}
        </p>
      </span>
      <span>
        <MessageFilled style={{ fontSize: "18px" }} />
        <p style={{ display: "inline", marginLeft: "4px", fontSize: "18px" }}>
          {commentCount}
        </p>
      </span>
    </div>
  </Card>
);

type DiscussionCardProps = {
  user: any;
  content: string;
  upvotes: number;
  commentCount: number;
  views: number;
  title?: string;
  onClick: Function;
};

DiscussionCard.propTypes = {
  user: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default DiscussionCard;
