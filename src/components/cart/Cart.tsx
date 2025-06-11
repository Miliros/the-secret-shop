import { useProductsInCart } from "@/components/hooks/useProductsInCart";
import { ItemCard } from "@/components/cart/ItemCard";
import { useCart } from "./CartContext";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Cart = () => {
  const { productsInCart, totalToPay } = useProductsInCart();
  const { toggleCart } = useCart();

  return (
    <div className="flex flex-col justify-center p-0">
      <h1 className="lg:block mt-4 text-3xl font-bold text-gray-800 mb-2">
        CARRITO
      </h1>
      <hr className="mb-5" />
      {productsInCart.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-6 h-[400px]">
          <FiShoppingCart className="text-6xl mb-4" />
          <p className="text-lg mb-6">Tu carrito está vacío</p>
          <button
            onClick={toggleCart}
            className="bg-black text-white px-6 py-3 text-base font-medium cursor-pointer shadow-md hover:bg-[#3E2723] focus:outline-none focus:ring focus:ring-gray-300"
          >
            EMPEZÁ A COMPRAR
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2 w-full">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}

          <section
            aria-labelledby="summary-heading"
            className="w-full mt-10 flex flex-col items-center"
          >
            <div className="w-full max-w-md">
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">
                    ${totalToPay}
                  </dd>
                </div>
              </dl>
              {totalToPay > 0 ? (
                <p className="mt-1 text-sm text-gray-500">
                  Los gastos de envío y los impuestos se calcularán al momento
                  del pago.
                </p>
              ) : (
                <p className="mt-1 text-sm text-gray-500">
                  Tu carrito está vacío
                </p>
              )}
            </div>

            <div className="mt-10 w-full max-w-md">
              <Link
                href={"https://www.mercadopago.com.ar/home"}
                target="_blank"
              >
                <button
                  type="submit"
                  className={`w-full border border-transparent cursor-pointer px-4 py-3 text-base font-medium shadow-sm focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-50 ${
                    totalToPay === 0
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-black text-white hover:bg-[#3E2723]"
                  }`}
                  disabled={totalToPay === 0}
                >
                  Confirmar
                </button>
              </Link>
            </div>

            <div className="mt-4 text-center text-sm w-full max-w-md">
              <p>
                o
                <button
                  onClick={toggleCart}
                  className="font-medium text-black cursor-pointer hover:text-[#3E2723] m-1"
                >
                  Continua comprando
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Cart;
