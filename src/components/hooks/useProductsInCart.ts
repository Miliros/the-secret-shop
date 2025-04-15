import { useCart } from "../cart/CartContext";
import { products } from "@/utils/productData";
import { Product } from "@/types/types";

interface ProductInCart {
  product: Product;
  quantity: number;
}

export const useProductsInCart = () => {
  const { cart } = useCart();

  const productsInCart = cart
    .map(({ id, quantity }) => {
      const product = products.find((prod) => prod.id === id);
      return product ? { product, quantity } : null;
    })
    .filter(Boolean) as ProductInCart[];

  const totalToPay = productsInCart.reduce(
    (prev, current) => current.product.price * current.quantity + prev,
    0
  );

  return { productsInCart, totalToPay };
};
