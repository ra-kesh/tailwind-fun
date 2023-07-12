import Link from "next/link";
import React from "react";

const navigation = [
  { id: 1, name: "Product", href: "#" },
  { id: 2, name: "Feature", href: "#" },
  { id: 3, name: "Marketplace", href: "#" },
  { id: 4, name: "Company", href: "#" },
];

const page = () => {
  return (
    <div className="bg-white">
      <header>
        <nav className="flex items-center justify-between p-6">
          <div>
            <Link href="#">
              <span>logo</span>
            </Link>
          </div>
          <div className="flex gap-x-10">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm font-semibold text-gray-900"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div>
            <Link href={"#"} className="text-sm font-semibold text-gray-900">
              Login
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-2xl">
          <div className="mx-auto max-w-fit rounded-full text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 px-3 py-1 my-3">
            Announcing our next round of funding{" "}
            <Link href="#" className="font-semibold text-indigo-600">
              read more <span>&rarr;</span>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={"#"}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Get Started
              </Link>
              <Link href="#" className="text-sm font-semibold text-gray-900">
                Learn more <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
