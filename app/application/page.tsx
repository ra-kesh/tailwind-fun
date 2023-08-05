import React from "react";
import MenuTemplate, { componentDataType } from "../utility/MenuTemplate";

const applicationComponents: componentDataType = [
  {
    groupId: "1",
    groupName: "tables",
    groupContents: [
      {
        id: 1,
        name: "Multiline table with avatars",
        path: "application/avatar-multiline",
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
