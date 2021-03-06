import React, { FunctionComponent } from "react";
import PostContainer from "src/containers/PostContainer";

import { getPost } from "src/api/paths";
import SecondaryLayout from "src/layouts/SecondaryLayout";

const Post: FunctionComponent<PostProps> = ({ postData }) => {
  return (
    <SecondaryLayout
      centerContent={<PostContainer post={postData.data} />}
      sideContent={null}
    />
  );
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
  postData: {
    data: {
      title: string;
      content: string;
      upvotes: number;
      commentCount: number;
      created: any;
    };
  };
};

export default Post;
