import { useCart } from "../CartContext";

export const useCartActions = () => {
  const { addProduct, removeProduct } = useCart();

  const handleAddToCart = (id: string) => {
    addProduct(id);
  };

  const handleRemoveItem = (id: string) => {
    removeProduct(id);
  };

  return { handleAddToCart, handleRemoveItem };
};
