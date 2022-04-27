import React, { FunctionComponent } from "react";

import MainLayout from "../components/MainLayout";

import DiscussionContainer from "../containers/DiscussionContainer";
import LeftSideBarContainer from "../containers/LeftSideBarContainer";
import RightSideBarContainer from "../containers/RightSideBarContainer";

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
