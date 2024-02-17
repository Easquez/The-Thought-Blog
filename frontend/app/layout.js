import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Thought Blog",
  description: "Project made by Haider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`d-flex flex-column min-vh-100 ${inter.className}`}>
        <AuthProvider>
          <Navbar /> {children}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
