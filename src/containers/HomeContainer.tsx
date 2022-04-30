import React, { FunctionComponent } from "react";

import MainLayout from "../components/MainLayout";

import DiscussionContainer from "src/containers/DiscussionContainer";
import LeftSideBarContainer from "src/containers/LeftSideBarContainer";
import RightSideBarContainer from "src/containers/RightSideBarContainer";

type HomeContainerProps = {};

const HomeContainer: FunctionComponent<HomeContainerProps> = () => {
  return (
    <MainLayout
      leftSiderContent={<LeftSideBarContainer />}
      centerContent={<DiscussionContainer />}
      rightSiderContent={<RightSideBarContainer />}
    />
  );
};

export default HomeContainer;
