import React from "react";

import SecondaryLayout from "src/layouts/SecondaryLayout";
import CreatePostContainer from "src/containers/CreatePostContainer";

const Create = () => {
  return (
    <SecondaryLayout
      centerContent={<CreatePostContainer />}
      sideContent={null}
    />
  );
};

export default Create;
