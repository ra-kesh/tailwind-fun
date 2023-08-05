"use client";

import { BreadCrumbs, ImageGallery, ProductInfo } from "./components";

const Page = () => {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav>
          <BreadCrumbs />
        </nav>
        <ImageGallery />
        <ProductInfo />
      </div>
    </div>
  );
};

export default Page;
