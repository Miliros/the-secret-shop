import { useCart } from "../cart/CartContext";

export const useCartActions = () => {
  const { addProduct, removeProduct, decreaseProduct } = useCart();

  const handleAddToCart = (id: string) => {
    addProduct(id);
  };

  const handleRemoveItem = (id: string) => {
    removeProduct(id);
  };

  const handleDecreaseItem = (id: string) => {
    decreaseProduct(id);
  };

  return { handleAddToCart, handleRemoveItem, handleDecreaseItem };
};
