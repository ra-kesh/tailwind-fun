import Link from "next/link";
import React from "react";

const marketingComponents = [
  {
    groupId: "1",
    groupName: "hero",
    groupContents: [
      {
        id: 1,
        name: "simple centered",
        path: "/components/marketing/simple-centered",
      },
    ],
  },
  {
    groupId: "2",
    groupName: "blog",
    groupContents: [
      {
        id: 1,
        name: "three column",
        path: "/components/marketing/three-column",
      },
    ],
  },
];

const page = () => {
  return (
    <div className="flex-col min-h-screen">
      <h1 className="text-center py-10 font-bold text-3xl">Marketing</h1>
      <div className="flex-col p-5 ">
        {marketingComponents?.map((component) => {
          return (
            <div
              key={component.groupId}
              className="border-b  border-gray-200 py-5"
            >
              <h2 className="font-bold text-2xl py-2">{component.groupName}</h2>

              <div className="flex gap-x-10">
                {component.groupContents.map((groupContent) => {
                  return (
                    <Link href={groupContent.path} key={groupContent.id}>
                      <button className="rounded-full border border-gray-900 px-3 py-1.5">
                        {groupContent.name}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
