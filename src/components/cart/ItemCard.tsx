import {
  MdDeleteOutline,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import Image from "next/image";
import { Product } from "../../types/types";
import { useCartActions } from "../hooks/useCartActions";

interface Props {
  product: Product;
  quantity: number;
}

export const ItemCard = ({ product, quantity }: Props) => {
  const { handleAddToCart, handleRemoveItem, handleDecreaseItem } =
    useCartActions();

  return (
    <div className="flex items-center shadow rounded-lg w-full bg-white border-gray-100">
      <div className="p-2">
        <Image
          width={180}
          height={180}
          className="rounded"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="px-2 pb-5 w-full flex flex-col mt-2">
        <p className="font-bold text-base tracking-tight text-[#3E2723]">
          {product.name}
          <small className="text-xs p-2 text-gray-700">
            ${product.price.toFixed(2)}
          </small>
        </p>

        <div className="flex flex-col items-start justify-between">
          <span className="font-bold text-black text-sm">
            Total: ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex p-5 items-center justify-between">
        <MdRemoveCircleOutline
          size={19}
          aria-label="Restar producto"
          className={`transition-all m-1 ${
            quantity === 1
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : "hover:scale-105 focus:scale-107"
          }`}
          onClick={() => handleDecreaseItem(product.id)}
          role={quantity === 1 ? "button-disabled" : "button-active"}
        />

        <span className="text-gray-900 text-sm font-bold">{quantity}</span>

        <MdAddCircleOutline
          size={19}
          aria-label="Añadir producto"
          className="transition-all hover:scale-105 focus:scale-107 m-1"
          onClick={() => handleAddToCart(product.id)}
        />

        <MdDeleteOutline
          size={19}
          aria-label="Eliminar producto"
          className="transition-all hover:scale-105 focus:scale-107 ml-1"
          onClick={() => handleRemoveItem(product.id)}
        />
      </div>
    </div>
  );
};
