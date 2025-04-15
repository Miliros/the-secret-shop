"use client";

import { addProductToCart } from "./action";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export function ProductCard({ id, name, description, price, image }: Props) {
  const router = useRouter();

  const onAddToCart = () => {
    addProductToCart(id);
    router.refresh();
  };

  return (
    <div className="w-max max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-0">
      <Image
        src={image}
        alt="image product"
        width={300}
        height={300}
        className="w-full rounded-t-lg object-cover"
      />

      <div>
        <div className="p-2">
          <div className="mb-2">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased mt-1">
              ${price}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              {description}
            </p>
          </div>
        </div>

        <div className="p-2 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
