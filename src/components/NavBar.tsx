"use client";

import Image from "next/image";
import { RiMenuSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag, HiOutlineLogout } from "react-icons/hi";
import { useCart } from "@/components/cart/CartContext";
import CartModal from "@/components/cart/CartModal";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const { getTotalCount, isCartOpen, toggleCart } = useCart();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    Cookies.remove("userSession");
    router.push("/login");
  };

  return (
    <>
      <div className="sticky z-10 top-0 h-auto border-b lg:py-2.5 bg-white">
        <div className="px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={190}
                height={100}
                className="w-auto h-12 cursor-pointer object-cover"
                priority
              />
            </Link>

            <button className=" lg:hidden cursor-pointer" onClick={toggleMenu}>
              <RiMenuSearchLine size={36} />
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "flex flex-row space-x-4" : "hidden"
            } sm:flex sm:flex-row items-center w-full sm:w-auto space-y-0 m-2 sm:mt-0 lg:space-x-4`}
          >
            <div className="flex items-center">
              <Link
                href="/about"
                className="text-[#3E2723] cursor-pointer text-sm hover:text-gray-600"
              >
                Nosotros
              </Link>
            </div>
            <div className="flex space-x-2 items-center">
              <button
                onClick={toggleCart}
                className="group relative flex p-2 items-center justify-center h-10 rounded-3xl border border-b-gray-800 bg-white focus:bg-gray-100 active:bg-gray-200"
              >
                {getTotalCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalCount()}
                  </span>
                )}
                <HiOutlineShoppingBag
                  size={22}
                  className="text-gray-700 group-hover:text-[#3E2723] group-hover:scale-125 transition-transform duration-300"
                />
              </button>

              <button
                onClick={handleLogout}
                className="group relative flex p-2 items-center justify-center h-10 rounded-3xl border cursor-pointer border-b-gray-800 bg-white focus:bg-gray-100 active:bg-gray-200"
              >
                <HiOutlineLogout
                  size={22}
                  className="text-gray-700 group-hover:text-[#3E2723] group-hover:scale-125 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <CartModal isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
}
