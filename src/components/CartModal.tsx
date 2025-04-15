"use client";

import { HiOutlineX } from "react-icons/hi";
import Cart from "./Cart";

interface CartModalProps {
  isOpen: boolean; // Controla si el modal está abierto o cerrado
  onClose: () => void; // Callback para cerrar el modal
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-20 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Fondo oscuro */}
      <div
        className="fixed inset-0 "
        onClick={onClose} // Cerrar modal al hacer clic fuera
      />
      {/* Contenedor del modal */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg p-6 flex flex-col">
        {/* Header del modal */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <HiOutlineX size={24} />
          </button>
        </div>
        {/* Contenido del carrito */}
        <div className="flex-1 overflow-y-auto">
          <Cart /> {/* Aquí renderizas tu componente Cart */}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
