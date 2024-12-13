import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: string;
};

type ShopCategory = {
  products: { [category: string]: Product[] }; // Inline definition of products
};


// Card component to display each category
const Card = ({ category }: { category: string }) => {
  return (
    <div>
      <Link href={`/${category}`}>
        <div className="border-[1.5px] rounded-lg border-[#282C3F] border-opacity-[5%]">
          <Image
            src="/images/pro.png" // Static image for the category
            alt={category}
            width={500}
            height={500}
            className="w-[104.76px] h-[109.79px]"
          />
        </div>
        <div className="mt-[8px] text-[14px]">
          <p className="font-proximasemibold leading-[17px] tracking-[-0.38px] text-center">
            {category}
          </p>
        </div>
      </Link>
    </div>
  );
};

// Main component to display all categories
const ShopCategory = ({products}:ShopCategory) => {
  return (
    <div className="grid-container my-[80px]">
      <div className="col-start-1 col-end-5 flex items-center">
        <h1 className="font-proximasemibold leading-[18px] tracking-[1px] text-black text-[14px] mr-[12px]">
          SHOP BY CATEGORY
        </h1>
        <hr className="border-0 border-t-[1px] border-linear-gradient(90deg, #02060C 10%, #ffffff 100%) flex-grow" />
      </div>

      <div className="col-start-1 col-end-5 flex justify-between items-center mt-[27px]">
        <div className="flex justify-start gap-x-5 items-center w-full flex-wrap gap-y-7">
          {/* Loop through all categories from the products JSON */}
          {Object.keys(products).map(
            (category) =>
              category !== "bestsellers" && (
                <Card key={category} category={category} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
