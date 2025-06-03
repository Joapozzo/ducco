import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Duccó | Mueblería Premium - Diseño que transforma espacios",
  description: "Descubre muebles únicos y de calidad excepcional en Duccó. Más de 35 años creando espacios únicos que reflejan tu personalidad.",
  keywords: "muebles, mueblería, diseño, hogar, decoración, córdoba, premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}