import React from "react";
import MenuTemplate, { componentDataType } from "../utility/MenuTemplate";

const ecommerceComponents: componentDataType = [
  {
    groupId: "1",
    groupName: "product overviews",
    groupContents: [
      {
        id: 1,
        name: "product with image grid",
        path: "ecommerce/with-image-grid",
      },
    ],
  },
];

const page = () => {
  return (
    <div className="flex-col min-h-screen">
      <h1 className="text-center py-10 font-bold text-3xl">Application UI</h1>
      <MenuTemplate componentData={ecommerceComponents} />
    </div>
  );
};

export default page;
