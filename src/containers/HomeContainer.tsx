import React, { FunctionComponent } from "react";

import SecondaryLayout from "src/layouts/SecondaryLayout";

import DiscussionContainer from "src/containers/DiscussionContainer";
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
