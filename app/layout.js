import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tann Trim",
  description: "Modern Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
        {children}
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <p>Copyright © 2024 - All right reserved by Mohit Corp.</p>
        </footer>
        </div>
        </body>
    </html>
  );
}
