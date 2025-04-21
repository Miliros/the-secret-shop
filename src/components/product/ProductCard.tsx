"use client";

import { useCart } from "../cart/CartContext";
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
  category,
  stars,
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
        className="bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col h-full min-h-[450px]"
      >
        <div className="w-full aspect-[4/4] overflow-hidden rounded-t-lg ">
          <Image
            src={image}
            alt="image product"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div className="p-2">
            <p
              className="block font-sans text-base font-medium text-blue-gray-900 truncate"
              style={{ height: "24px" }}
            >
              {name}
            </p>
            <p
              className="block font-sans text-base font-medium text-blue-gray-900 mt-1 truncate"
              style={{ height: "24px" }}
            >
              ${price}
            </p>
            <p
              className="block font-sans text-sm text-gray-700 opacity-75 line-clamp-2"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
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
              Agregar al carrito
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
          category={category}
          stars={stars}
          onClose={toggleModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}
