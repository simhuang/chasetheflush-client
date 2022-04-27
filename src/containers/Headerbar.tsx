import React from "react";

import Link from "next/link";

const HeaderBar = () => {
  return (
    <>
      <Link href="/signin" passHref>
        Sign In
      </Link>
    </>
  );
};

export default HeaderBar;
