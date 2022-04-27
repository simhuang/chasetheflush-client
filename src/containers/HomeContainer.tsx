import React, { FunctionComponent } from "react";

import Link from "next/link";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

type HomeContainerProps = {};

const HomeContainer: FunctionComponent<HomeContainerProps> = () => {
  return (
    <>
      <Link href="/signin" passHref>
        <SecondaryButton name="Sign In" onClick={() => {}} />
      </Link>
      <SecondaryButton name="bitch" onClick={() => {}} />
      <PrimaryButton name="chicken" onClick={() => {}} />
    </>
  );
};

export default HomeContainer;
