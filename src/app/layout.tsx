import type { Metadata } from "next";
import "./globals.css";

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
        | <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
