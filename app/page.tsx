import AboutUs from "./_components/AboutUs";
import Bestseller from "./_components/Bestseller";
import Hero from "./_components/Hero";
import ShopCategory from "./_components/ShopCategory";

import products from "@/public/products/products.json"; // Import the JSON file

const home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Bestseller products={products} />
      <ShopCategory products={products} />
      <AboutUs />
    </div>
  );
};

export default home;
