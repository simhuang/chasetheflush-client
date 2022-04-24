import type { NextPage } from "next";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const Home: NextPage = () => {
  return (
    <>
      <SecondaryButton name="bitch" onClick={() => {}} />
      <PrimaryButton name="chicken" onClick={() => {}} />
    </>
  );
};

export default Home;
