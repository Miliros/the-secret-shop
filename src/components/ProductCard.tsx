"use client";

import { useCart } from "./CartContext";
import { useState } from "react";
import Image from "next/image";
import ProductDetailModal from "./ProductDetailModal";
import { Product } from "@/types/types";

export default function ProductCard({
  id,
  name,
  description,
  price,
  detail,
  image,
}: Product) {
  const { addProduct, toggleCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addProduct(id);
    toggleCart();
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div
        onClick={toggleModal}
        className="w-max max-w-xs bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
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
              <p className="block font-sans text-base font-medium text-blue-gray-900">
                {name}
              </p>
              <p className="block font-sans text-base font-medium text-blue-gray-900 mt-1">
                ${price}
              </p>
            </div>
            <p className="block font-sans text-sm text-gray-700 opacity-75">
              {description}
            </p>
          </div>
          <div className="p-2 pt-0">
            <button
              className="block w-full rounded-lg bg-blue-gray-900/10 py-3 px-4 text-blue-gray-900 font-bold uppercase transition-all hover:scale-105 focus:scale-105"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProductDetailModal
          id={id}
          name={name}
          description={description}
          price={price}
          detail={detail}
          image={image}
          onClose={toggleModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}
