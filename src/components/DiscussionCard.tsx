import React, { FunctionComponent } from "react";

import PropTypes from "prop-types";

import moment from "moment";

import { Card, Avatar, Button, Tooltip } from "antd";
import { LikeFilled, EyeFilled, MessageFilled } from "@ant-design/icons";
import { PRIMARY_GREEN } from "src/constants/style";

import { UTC_DATETIME } from "src/constants/time";

const { Meta } = Card;

const DiscussionCard: FunctionComponent<DiscussionCardProps> = ({
  user,
  content,
  upvotes,
  commentCount,
  views,
  title,
  onClick,
  created,
}) => (
  <Card
    hoverable
    onClick={(e) => onClick(e)}
    style={{
      marginBottom: "24px",
    }}
    extra={
      // @ts-ignore comment
      <Tooltip>
        <span>{moment(created, UTC_DATETIME).fromNow()}</span>
      </Tooltip>
    }
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
  created: string;
};

DiscussionCard.propTypes = {
  user: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  created: PropTypes.string.isRequired,
};

export default DiscussionCard;
