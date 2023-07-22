import Link from "next/link";
import React from "react";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const page = () => {
  return (
    <div className="p-12 flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            {" "}
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>

        <div>
          <button className="block rounded-md px-3 py-2 text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500">
            Add user
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="inline-block min-w-full align-middle ">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="text-left text-sm font-semibold text-gray-900 p-4">
                  Name
                </th>
                <th className="text-left text-sm font-semibold text-gray-900 p-4">
                  Title
                </th>
                <th className="text-left text-sm font-semibold text-gray-900 p-4">
                  Status
                </th>
                <th className="text-left text-sm font-semibold text-gray-900 p-4">
                  Role
                </th>
                <th className="relative p-4 ">
                  <span className="sr-only">edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {people.map((person) => {
                return (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap text-sm p-4">
                      <div className="flex items-center">
                        <div className="h-11 w-11">
                          <img
                            src={person.image}
                            alt=""
                            className="rounded-full"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {person.name}
                          </div>
                          <div className="mt-1 text-gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap p-4 text-gray-500 text-sm">
                      <div className="text-gray-900">{person.title}</div>
                      <div className="mt-1">{person.department}</div>
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-lg bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        active
                      </span>
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="whitespace-nowrap p-4 text-right text-sm font-medium relative">
                      <Link
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit <span className="sr-only">{person.name}</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
