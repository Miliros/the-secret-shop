"use client";

import Link from "next/link";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { HiOutlineShoppingBag, HiOutlineLogout } from "react-icons/hi";
import { useCart } from "@/components/CartContext";
import CartModal from "@/components/CartModal";

export default function NavBar() {
  const { getTotalCount, isCartOpen, toggleCart } = useCart();

  return (
    <>
      <div className="sticky z-10 top-0 h-auto border-b bg-white lg:py-2.5">
        <div className="px-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <h5 className="text-2xl font-semibold">Old School Tech</h5>
            <button className="w-12 h-12 lg:hidden">
              <CiMenuBurger size={30} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 lg:flex">
            <div className="relative w-full sm:w-48">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full outline-none transition-all border-gray-300"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CiSearch className="text-gray-400" />
              </div>
            </div>

            {/* Botón del carrito con contador */}
            <button
              onClick={toggleCart}
              className="relative flex p-2 items-center justify-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              {getTotalCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalCount()}
                </span>
              )}
              <HiOutlineShoppingBag size={22} />
            </button>

            <Link
              href={"/logout"}
              className="flex p-2 items-center justify-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              <HiOutlineLogout size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal del carrito */}
      <CartModal isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
}
