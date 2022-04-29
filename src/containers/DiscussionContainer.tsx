import React, { FunctionComponent, useEffect, useState } from "react";

import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";

import DiscussionCard from "src/components/DiscussionCard";

import { getpaginatedDisucssionsPath } from "src/api/paths";

const FETCH_LIMIT = 25;

const DiscussionContainer: FunctionComponent<
  DiscussionContainerProps
> = ({}) => {
  const [fetchedOffset, setFetchedOffset] = useState(0);
  const [discussions, setDiscussions] = useState<any[]>([]);

  useEffect(() => {
    async function fetchDiscussion() {
      const discussionPath = getpaginatedDisucssionsPath();
      const response = await fetch(discussionPath);
      const discussionResponse = await response.json();
      setDiscussions(discussionResponse.data);
    }
    fetchDiscussion();
  }, []);

  return (
    <div>
      {discussions.map((discussion) => {
        return (
          <DiscussionCard
            key={discussion.id}
            author={discussion.author}
            content={discussion.content}
            upvotes={discussion.upvotes}
            views={discussion.views}
            commentCount={discussion.commentCount}
          />
        );
      })}
    </div>
  );
};

type DiscussionContainerProps = {
  discussions: Array<any>;
};

DiscussionContainer.propTypes = {
  discussions: PropTypes.array.isRequired,
};

export default DiscussionContainer;
