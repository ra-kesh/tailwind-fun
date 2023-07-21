import React from "react";
import MenuTemplate, { componentDataType } from "../utility/MenuTemplate";

const applicationComponents: componentDataType = [
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
];

const page = () => {
  return (
    <div className="flex-col min-h-screen">
      <h1 className="text-center py-10 font-bold text-3xl">Application UI</h1>
      <MenuTemplate componentData={applicationComponents} />
    </div>
  );
};

export default page;
