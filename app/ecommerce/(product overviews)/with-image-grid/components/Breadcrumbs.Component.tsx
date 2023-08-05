import { product } from "../data";

export const BreadCrumbs = () => {
  return (
    <ol className="flex lg:max-w-7xl items-center space-x-2 lg:px-8">
      {product.breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <a
                href={breadcrumb.href}
                className="mr-2 text-sm font-medium text-gray-900"
              >
                {breadcrumb.name}
              </a>
              <BackwardSlash />
            </div>
          </li>
        );
      })}
      <li>
        <a
          href={product.href}
          className="font-medium text-gray-500 hover:text-gray-600"
        >
          {product.name}
        </a>
      </li>
    </ol>
  );
};

const BackwardSlash = () => {
  return (
    <svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-4 text-gray-300"
    >
      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
    </svg>
  );
};
