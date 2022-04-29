import React, { FunctionComponent, useEffect, useState } from "react";

import PropTypes from "prop-types";

import DiscussionCard from "../components/DiscussionCard";

import { getpaginatedDisucssionsPath } from "../api/paths";

const DiscussionContainer: FunctionComponent<
  DiscussionContainerProps
> = ({}) => {
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

export async function getStaticProps() {
  const discussionPath = getpaginatedDisucssionsPath();
  const response = await fetch(discussionPath);
  const discussions = response.json();
  console.log(discussions);
  return {
    props: {
      discussions: discussions,
    },
  };
}

export default DiscussionContainer;
