"use client";
import { usePathname } from "next/navigation";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const LayoutContent = ({ children }) => {
  const pathname = usePathname();

  // Exclude the layout for the `/cart` and `/shipping` routes
  const isCartPage = pathname.startsWith("/cart");
  const isShippingPage = pathname.startsWith("/shipping");

  return isCartPage || isShippingPage ? (
    // Render children only for the cart and shipping pages (without Header and Footer)
    children
  ) : (
    // Default layout for all other routes
    <div className="">
      <div className=" lg:mx-[250px]">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutContent;
