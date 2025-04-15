"use client";

import { FC } from "react";
import Image from "next/image";

interface ProductDetailModalProps {
  id: string;
  name: string;
  price: number;
  description: string;
  detail: string;
  image: string;
  onClose: () => void;
  onAddToCart: () => void;
}

const ProductDetailModal: FC<ProductDetailModalProps> = ({
  name,
  price,
  description,
  detail,
  image,
  onClose,
  onAddToCart,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-8 relative  border border-black">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="flex">
          <Image
            src={image}
            alt="Product Image"
            width={400}
            height={400}
            className="w-1/2 rounded-lg object-cover"
          />
          <div className="ml-8 w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
            <p className="mt-4 text-lg font-semibold text-gray-800">${price}</p>
            <p className="mt-4 text-sm text-gray-600">{detail}</p>
            <div className="mt-6">
              <button
                onClick={() => {
                  onAddToCart();
                  onClose();
                }}
                className="w-full py-3 px-4 bg-black text-white font-bold  hover:bg-[#3E2723]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
