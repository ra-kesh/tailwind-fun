import React from "react";
import MenuTemplate, { componentDataType } from "../utility/MenuTemplate";

const marketingComponents: componentDataType = [
  {
    groupId: "1",
    groupName: "hero",
    groupContents: [
      {
        id: 1,
        name: "simple centered",
        path: "/marketing/simple-centered",
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
        path: "/marketing/three-column",
      },
    ],
  },
];

const page = () => {
  return (
    <div className="flex-col min-h-screen">
      <h1 className="text-center py-10 font-bold text-3xl">Marketing</h1>
      <MenuTemplate componentData={marketingComponents} />
    </div>
  );
};

export default page;
