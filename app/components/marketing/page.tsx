import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex-col min-h-screen">
      <h1 className="text-center py-10 font-bold text-2xl">Marketing</h1>
      <div className="flex p-5 gap-x-10">
        <Link href="/components/marketing/simple-centered">
          <button>simple centered</button>
        </Link>
        <Link href="/components/marketing/three-column">
          <button>three column</button>
        </Link>
      </div>
    </div>
  );
};

export default page;
