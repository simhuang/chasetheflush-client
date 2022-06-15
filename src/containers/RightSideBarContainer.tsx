import React from "react";

import { useRouter } from "next/router";

import PrimaryButton from "src/components/PrimaryButton";

const RightSideBarContainer = () => {
  const router = useRouter();

  const createDiscussionHandler = () => {
    console.log("creating a new post");
    router.push(`/post/create`);
  };

  return (
    <>
      <div>right side bar</div>
      <PrimaryButton
        name="Create Discussion"
        onClick={createDiscussionHandler}
      />
    </>
  );
};

export default RightSideBarContainer;
