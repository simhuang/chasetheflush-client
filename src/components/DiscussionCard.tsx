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
      marginBottom: "10px",
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description={content}
    />
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
