import React, { FunctionComponent, useEffect, useState } from "react";

import PropTypes from "prop-types";

import { useRouter } from "next/router";

import InfiniteScroll from "react-infinite-scroll-component";

import { List, Avatar, Space } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

import DiscussionCard from "src/components/DiscussionCard";

import { getpaginatedDisucssionsPath } from "src/api/paths";

const FETCH_LIMIT = 10;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const DiscussionContainer: FunctionComponent<
  DiscussionContainerProps
> = ({}) => {
  const [discussions, setDiscussions] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const discussions = await fetchDiscussions();
      setDiscussions(discussions.data);
    }
    fetchData();
  }, []);

  const fetchDiscussions = async () => {
    const fetchOffset = discussions.length;
    const discussionPath = getpaginatedDisucssionsPath(
      FETCH_LIMIT,
      fetchOffset
    );
    const response = await fetch(discussionPath);
    const discussionResponse = await response.json();

    return discussionResponse;
  };

  const getMoreDiscussions = async () => {
    const discussionResponse = await fetchDiscussions();
    setDiscussions([...discussions, ...discussionResponse.data]);
  };

  const handleCardClick = (id: number) => {
    router.push(`/post/${id}`);
  };

  // TODO: TO BE REMOVED
  const renderDiscussions = () => {
    return discussions.map((discussion, index) => {
      return (
        <DiscussionCard
          key={discussion.id}
          user={discussion.user}
          content={discussion.content}
          upvotes={discussion.upvotes}
          views={discussion.views}
          commentCount={discussion.commentCount}
          title={discussion.title}
          onClick={() => handleCardClick(discussion.id)}
          created={discussion.created}
        />
      );
    });
  };

  const renderDiscussionsList = () => {
    return (
      <List
        dataSource={discussions}
        renderItem={(discussion) => (
          <div>
            <IconText
              icon={StarOutlined}
              text={discussion.views}
              key="list-vertical-star-o"
            />
            <IconText
              icon={LikeOutlined}
              text={discussion.upvotes}
              key="list-vertical-like-o"
            />
            <IconText
              icon={MessageOutlined}
              text={discussion.commentCount}
              key="list-vertical-message"
            />
          </div>
        )}
      />
    );
  };

  const hasMore = () => {
    return discussions.length > 40;
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={discussions.length}
        hasMore={hasMore()}
        loader={<h4>loading...</h4>}
        next={getMoreDiscussions}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ padding: "10px" }}
      >
        {renderDiscussions()}
        {/* {renderDiscussionsList()} */}
      </InfiniteScroll>
    </div>
  );
};

type DiscussionContainerProps = {
  discussions: Array<any>;
};

DiscussionContainer.propTypes = {
  discussions: PropTypes.array.isRequired,
};

DiscussionContainer.defaultProps = {
  discussions: [],
};

export default DiscussionContainer;
