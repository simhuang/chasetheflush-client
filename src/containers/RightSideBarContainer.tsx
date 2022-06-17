import React from "react";

import { useRouter } from "next/router";

import PrimaryButton from "src/components/PrimaryButton";

const RightSideBarContainer = () => {
  const router = useRouter();

  const createDiscussionHandler = () => {
    router.push(`/post/create`);
  };

  return (
    <div style={{ border: "1px solid #f0f0f0" }}>
      <PrimaryButton
        name="Create Discussion"
        onClick={createDiscussionHandler}
      />
    </div>
  );
};

export default RightSideBarContainer;
