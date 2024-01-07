import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/navbar/Navbar";
import Footer from "@/ui/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative h-screen bg-dark-blue text-white mx-auto jusify-center max-w-8xl flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
