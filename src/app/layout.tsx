import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";

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
      <body>
        <CartProvider>
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
