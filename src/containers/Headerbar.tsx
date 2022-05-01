import React from "react";

import Link from "next/link";

const HeaderBar = () => {
  return (
    <div>
      <Link href="/signin" passHref>
        Sign In
      </Link>
    </div>
  );
};

export default HeaderBar;
