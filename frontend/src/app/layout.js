import { Inter } from "next/font/google";
import "./globals.css";
// import Footer from "@/components/top_components/Footer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Demo from "./Demo";
import Demo2 from "./Demo2";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-maxW m-auto box-border bg-white`}>
        <Navbar/>
        {/* <Demo/> */}
        {/* <Demo2/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
