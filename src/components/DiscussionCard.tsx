import React, { FunctionComponent } from "react";

import PropTypes from "prop-types";

import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const DiscussionCard: FunctionComponent<DiscussionCardProps> = ({
  user,
  content,
  upvotes,
  commentCount,
  views,
  title,
}) => (
  <Card
    style={{
      marginBottom: "24px",
      borderRadius: "8px",
    }}
    extra={<div style={{ fontSize: "10px" }}>5 minutes ago</div>}
    title={`${user.firstName} ${user.lastName}`}
  >
    <h1>{title}</h1>
  </Card>
);

type DiscussionCardProps = {
  user: any;
  content: string;
  upvotes: number;
  commentCount: number;
  views: number;
  title?: string;
};

DiscussionCard.propTypes = {
  user: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  title: PropTypes.string,
};

export default DiscussionCard;
