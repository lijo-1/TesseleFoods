import CardComponent from "@/app/_components/CardComponent";
import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: string;
};

type CategoryProps = {
  filteredProducts: Product[]; // List of filtered products to render
  category: string; // Category name for the heading
};

export const Category = ({ filteredProducts, category }: CategoryProps) => {
  return (
    <div className="grid-container mt-[48px] mb-[50px]">
      <div className="col-start-1 col-end-5 flex items-center">
        <h1 className="font-proximasemibold leading-[18px] tracking-[1px] text-black text-[14px] mr-[12px]">
          {category.toUpperCase()}
        </h1>
        <hr className="border-0 border-t-[1px] border-linear-gradient(90deg, #02060C 10%, #ffffff 100%) flex-grow" />
      </div>

      <div className="col-start-1 col-end-5 flex justify-between items-center mt-[27px]">
        <div className="flex justify-between items-center w-full flex-wrap gap-y-7">
          {/* Render filtered products dynamically */}
          {filteredProducts.map((product) => (
            <CardComponent
              key={product.id}
              customStyles="flex-col"
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
