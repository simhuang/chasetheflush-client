import React, { FunctionComponent } from "react";

import SecondaryLayout from "src/components/SecondaryLayout";

import DiscussionContainer from "src/containers/DiscussionContainer";
import LeftSideBarContainer from "src/containers/LeftSideBarContainer";
import RightSideBarContainer from "src/containers/RightSideBarContainer";

type HomeContainerProps = {};

const HomeContainer: FunctionComponent<HomeContainerProps> = () => {
  return (
    <SecondaryLayout
      centerContent={<DiscussionContainer />}
      sideContent={<RightSideBarContainer />}
    />
  );
};

export default HomeContainer;
