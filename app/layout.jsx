import "./globals.css";
import { Navbar } from "@/app/ui/Nabvar";
import { raleway } from "@/app/ui/fonts";
import { Footer } from "@/app/ui/Footer";

export const metadata = {
  title: "CYTSA",
  description: "CONEXIONES Y TRANSFORMACIONES PLÁSTICAS DE MONTERREY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
