"use client";

import { HiOutlineX } from "react-icons/hi";
import Cart from "./Cart";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-20 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="fixed inset-0 " onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg p-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <HiOutlineX size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
