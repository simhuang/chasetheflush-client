import React from "react";

import Link from "next/link";

const HeaderBar = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Link href="/signin" passHref>
        Sign In
      </Link>
    </div>
  );
};

export default HeaderBar;
