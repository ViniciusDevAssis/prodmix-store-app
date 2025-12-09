import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "ProdMix",
  description: "Catálogo digital para lojas",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
