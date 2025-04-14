"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { HiOutlineShoppingBag, HiOutlineLogout } from "react-icons/hi";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCookie = Cookies.get("cart");
  const cart = cartCookie ? JSON.parse(cartCookie) : {};

  const getTotalCount = () => {
    let items = 0;
    Object.values(cart).forEach((value) => {
      items += value as number;
    });
    return items;
  };

  return (
    <div className="sticky z-10 top-0 h-auto border-b bg-white lg:py-2.5">
      <div className="px-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center justify-between w-full sm:w-auto">
          {/* Logo */}
          <h5 className="text-2xl font-semibold">Old School Tech</h5>

          <button
            className="w-12 h-12 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <CiMenuBurger size={30} />
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col sm:flex-row items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 lg:flex`}
        >
          <div className="relative w-full sm:w-48">
            <input
              type="text"
              placeholder="Search..."
              id="searchInput"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full outline-none transition-all border-gray-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="text-gray-400" />
            </div>
          </div>

          <Link
            href={"/dashboard/cart"}
            className="flex p-2 items-center justify-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
          >
            {getTotalCount() > 0 && (
              <span className="text-sm mr-1">{getTotalCount()}</span>
            )}
            <HiOutlineShoppingBag size={22} />
          </Link>

          <Link
            href={"/logout"}
            className="flex p-2 items-center justify-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
          >
            <HiOutlineLogout size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
