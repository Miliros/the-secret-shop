"use client";

import { FC } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface ProductDetailModalProps {
  id: string;
  name: string;
  description: string;
  price: number;
  detail: string;
  image: string;
  stars: number;
  onClose: () => void;
  onAddToCart: () => void;
  category?: string;
}

const ProductDetailModal: FC<ProductDetailModalProps> = ({
  name,
  price,
  description,
  detail,
  image,
  stars,
  category,
  onClose,
  onAddToCart,
}) => {
  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < stars ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-[90%] sm:max-w-lg md:max-w-3xl lg:max-w-4xl p-6 relative border border-black overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-black hover:text-gray-700"
        >
          ✕
        </button>
        <div className="flex flex-col sm:flex-row ">
          <Image
            src={image}
            alt="Product Image"
            width={400}
            height={400}
            className="w-full sm:w-1/2 rounded-lg object-cover sm:h-auto h-64 max-h-[450px]"
          />
          <div className="sm:ml-8 sm:w-1/2">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mt-4 sm:mt-0">
              {name}
            </h2>
            <p className="mt-2 text-gray-600">{description}</p>
            <p className="mt-4 text-lg font-semibold text-gray-800">${price}</p>
            <p className="mt-4 text-sm text-gray-600">{detail}</p>
            {category && (
              <p className="mt-4 text-sm font-medium text-gray-500">
                <span className="text-gray-900">{category}</span>
              </p>
            )}
            <div className="mt-4 flex items-center">{renderStars(stars)}</div>
            <div className="mt-6">
              <button
                onClick={() => {
                  onAddToCart();
                  onClose();
                }}
                className="w-full py-3 px-4 bg-black text-white font-bold hover:bg-[#3E2723]"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
