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
  author,
  content,
  upvotes,
  commentCount,
  views,
}) => (
  <Card
    style={{
      marginBottom: "24px",
      borderRadius: "12px",
    }}
    cover={<img alt="example" src="https://picsum.photos/200/100" />}
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
    title="Card title"
  >
    <div>hello</div>
  </Card>
);

type DiscussionCardProps = {
  author: string;
  content: string;
  upvotes: number;
  commentCount: number;
  views: number;
};

DiscussionCard.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};

export default DiscussionCard;
