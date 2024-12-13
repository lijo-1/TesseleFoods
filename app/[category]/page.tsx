import products from "@/public/products/products.json"; // Import the JSON file
import { Category } from "./_components/Category";

// Define the type for each product in the JSON
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: string;
};

type ProductsByCategory = {
  [category: string]: Product[]; // Each category maps to an array of products
};

type Props = {
  params: {
    category: string;
  };
};

// Dynamically generate the metadata based on the category
export const generateMetadata = ({ params }: Props) => {
  const { category } = params;

  return {
    title: `Tessele Foods | ${category.charAt(0).toUpperCase() + category.slice(1)}`, // Capitalize category name
    description: `Browse products in the ${category} category.`,
  };
};

//params destructured here {}
const Page = ({ params: { category } }: Props) => {
  const filteredProducts: Product[] =
    (products as ProductsByCategory)[category] || [];

  return (
    <div className="bg-white">
      <Category filteredProducts={filteredProducts} category={category} />
    </div>
  );
};

export default Page;
