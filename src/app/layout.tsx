import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Secret Shop",
  description: "Una tienda retro con encanto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        <CartProvider>
          <main>{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
