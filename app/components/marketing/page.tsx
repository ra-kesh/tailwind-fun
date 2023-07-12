import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>marketing</h1>
      <Link href="/components/marketing/simple-centered">
        <button>simple centered</button>
      </Link>
    </div>
  );
};

export default page;
