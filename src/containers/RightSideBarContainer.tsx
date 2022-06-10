import React from "react";
import PrimaryButton from "src/components/PrimaryButton";

const RightSideBarContainer = () => {
  const createDiscussionHandler = () => {
    console.log("creating a new post");
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
