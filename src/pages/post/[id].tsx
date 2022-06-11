import React, { FunctionComponent } from "react";
import PostContainer from "src/containers/PostContainer";

import { getPost } from "src/api/paths";

const Post: FunctionComponent<PostProps> = ({ postData }) => {
  return <PostContainer post={postData.data} />;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const response = await fetch(getPost(id));
  const postData = await response.json();

  return {
    props: {
      postData,
    },
  };
}

type PostProps = {
  postData: { data: Object };
};

export default Post;
