import Cookies from "js-cookie";

export const getCookieCart = (): { [id: string]: number } => {
  const cookieCart = Cookies.get("cart");
  return cookieCart ? JSON.parse(cookieCart) : {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();
  cookieCart[id] = (cookieCart[id] || 0) + 1;
  Cookies.set("cart", JSON.stringify(cookieCart), { expires: 7 });
};

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  delete cookieCart[id];
  Cookies.set("cart", JSON.stringify(cookieCart), { expires: 7 });
};

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    cookieCart[id] -= 1;
    if (cookieCart[id] === 0) delete cookieCart[id];
    Cookies.set("cart", JSON.stringify(cookieCart), { expires: 7 });
  }
};
