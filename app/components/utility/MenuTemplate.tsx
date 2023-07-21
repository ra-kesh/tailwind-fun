import Link from "next/link";
import React from "react";

export type componentDataType = {
  groupId: string;
  groupName: string;
  groupContents: {
    id: number;
    name: string;
    path: string;
  }[];
}[];

const MenuTemplate = ({
  componentData,
}: {
  componentData: componentDataType;
}) => {
  return (
    <div className="flex-col p-5 ">
      {componentData?.map((component) => {
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
  );
};

export default MenuTemplate;
