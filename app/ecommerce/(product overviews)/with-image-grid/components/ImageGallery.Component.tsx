import { product } from "../data";

export const ImageGallery = () => {
  return (
    <div className="mx-auto mt-6  lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-h-4 aspect-w-3 lg:block rounded-lg overflow-hidden">
        <Image index={0} />
      </div>

      <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <Image index={1} />
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <Image index={2} />
        </div>
      </div>

      <div className="lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <Image index={3} />
      </div>
    </div>
  );
};

const Image = ({ index }: { index: number }) => {
  return (
    <img
      src={product.images[index].src}
      alt={product.images[index].alt}
      className="h-full w-full object-cover object-center"
    />
  );
};
