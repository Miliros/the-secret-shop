import Cookies from "js-cookie";

export const getCookieCart = (): { [id: string]: number } => {
  const cookieCart = Cookies.get("cart");
  return cookieCart ? JSON.parse(cookieCart) : {};
};
