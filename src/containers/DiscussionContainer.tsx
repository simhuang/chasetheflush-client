import React, { FunctionComponent, useEffect, useState } from "react";

import PropTypes from "prop-types";

import { useRouter } from "next/router";

import InfiniteScroll from "react-infinite-scroll-component";

import DiscussionCard from "src/components/DiscussionCard";

import { getpaginatedDisucssionsPath } from "src/api/paths";

const FETCH_LIMIT = 10;

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
        />
      );
    });
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
      >
        {renderDiscussions()}
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
