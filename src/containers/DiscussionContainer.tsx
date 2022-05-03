import React, { FunctionComponent, useEffect, useState } from "react";

import PropTypes from "prop-types";

import Link from "next/link";

import InfiniteScroll from "react-infinite-scroll-component";

import DiscussionCard from "src/components/DiscussionCard";

import { getpaginatedDisucssionsPath } from "src/api/paths";

const FETCH_LIMIT = 10;

const DiscussionContainer: FunctionComponent<
  DiscussionContainerProps
> = ({}) => {
  const [discussions, setDiscussions] = useState<any[]>([]);

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

  const handleCardClick = (e: any) => {
    console.log(e.target);
  };

  const renderDiscussions = () => {
    console.log(discussions);
    return discussions.map((discussion, index) => {
      return (
        <Link key={index} passHref href={`/post/${discussion.id}`}>
          <DiscussionCard
            user={discussion.user}
            content={discussion.content}
            upvotes={discussion.upvotes}
            views={discussion.views}
            commentCount={discussion.commentCount}
            title={discussion.title}
            onClick={handleCardClick}
          />
        </Link>
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
        hasMore
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
