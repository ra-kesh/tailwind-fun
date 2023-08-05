import { useState } from "react";
import { product } from "../data";
import { RadioGroup } from "@headlessui/react";

export const ProductInfo = () => {
  return (
    <div className="mx-auto lg:grid lg:grid-cols-3 lg:grids-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:py-20 ">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 ">
        <h1 className="sm:text-3xl font-bold text-gray-900">{product.name}</h1>
      </div>

      <ProductAction />

      <div className="lg:col-span-2  lg:border-r lg:border-gray-200 py-10 lg:pt-6  lg:pr-8">
        <ProdutDescription />
        <ProductHighlight />
        <ProductDetails />
      </div>
    </div>
  );
};

const ProductAction = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="lg:row-span-3">
      <p className="text-3xl text-gray-900">{product.price}</p>

      <form className="mt-10">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Colors</h3>
          <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className="mt-4"
          >
            <div className="flex items-center space-x-3">
              {product.colors.map((color) => {
                return (
                  <RadioGroup.Option
                    key={color.name}
                    value={color}
                    className={({ active, checked }) =>
                      classNames(
                        color.selectedClass,
                        active && checked ? "ring ring-offset-1" : "",
                        !active && checked ? "ring-2" : "",
                        "flex items-center justify-center",
                        "rounded-full p-0.5 -m-0.5 cursor-pointer"
                      )
                    }
                  >
                    <span
                      className={classNames(
                        color.class,
                        "h-8 w-8 rounded-full border border-black border-opacity-10"
                      )}
                    ></span>
                  </RadioGroup.Option>
                );
              })}
            </div>
          </RadioGroup>
        </div>

        <button
          type="submit"
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to bag
        </button>
      </form>
    </div>
  );
};

const ProductHighlight = () => {
  return (
    <div className="my-10">
      <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
      <div className="mt-4">
        <ul className="list-disc space-y-2 pl-4 text-sm">
          {product.highlights.map((highlight) => {
            return (
              <li key={highlight} className="text-gray-400">
                <span className="text-gray-600">{highlight}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-900">Details</h2>

      <div className="mt-4 space-y-6">
        <p className="text-sm text-gray-600">{product.details}</p>
      </div>
    </div>
  );
};

const ProdutDescription = () => {
  return (
    <div>
      <div className="space-y-6">
        <p className="text-base text-gray-900">{product.description}</p>
      </div>
    </div>
  );
};
