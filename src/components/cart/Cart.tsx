import { useProductsInCart } from "@/components/hooks/useProductsInCart";
import { ItemCard } from "@/components/cart/ItemCard";
import { useCart } from "./CartContext";
import Link from "next/link";

const Cart = () => {
  const { productsInCart, totalToPay } = useProductsInCart();
  const { toggleCart } = useCart();

  return (
    <div className="flex flex-col justify-center p-0">
      <h1 className="lg:block mt-4 text-xl font-bold text-gray-800 mb-2">
        CARRITO
      </h1>

      <hr className="mb-5" />

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
            <p className="mt-1 text-sm text-gray-500">
              Los gastos de envío y los impuestos se calcularán al momento del
              pago.{" "}
            </p>
          </div>

          <div className="mt-10 w-full max-w-md">
            <button
              type="submit"
              className="w-full border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Confirmar
            </button>
          </div>

          <div className="mt-6 text-center text-sm w-full max-w-md">
            <p>
              o
              <Link
                href={"/"}
                onClick={toggleCart}
                className="font-medium text-black hover:text-amber-900 m-1"
              >
                Continua comprando
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
