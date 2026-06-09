import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Hind_Siliguri, Inter } from "next/font/google";
import "swiper/css";
import "./globals.css";

const inter=Inter({
  variable:"--font-inter",
  subsets:["latin"]
})
const hindSiliguri=Hind_Siliguri({
  variable:"--font-hind-siliguri",
  weight:["300","400","500","600","700"],
  subsets:["latin"]
})
export const metadata = {
  title: "NGO - Home",
  description: "NGO BD Serving Bangladesh Since 2005",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
