import CardComponent from "./CardComponent";

// Define the type for each product in the JSON
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: string;
};

type BestsellerProps = {
  products: { [category: string]: Product[] }; // Inline definition of products
};


const Bestseller = ({ products }: BestsellerProps) => {
  const filteredProducts: Product[] = products["bestsellers"] || []; // Access the "bestsellers" category safely

  return (
    <div className="grid-container my-[80px]">
      <div className="col-start-1 col-end-5 flex items-center">
        <h1 className="font-proximasemibold leading-[18px] tracking-[1px] text-black text-[14px] mr-[12px]">
          BEST SELLERS
        </h1>
        <hr className="border-0 border-t-[1px] border-linear-gradient(90deg, #02060C 10%, #ffffff 100%) flex-grow" />
      </div>

      <div className="col-start-1 col-end-5 flex justify-between items-center mt-[27px]">
        <div className="flex justify-start gap-x-5 items-center w-full flex-wrap gap-y-7">
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

export default Bestseller;
