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

// Correctly type the PageProps to reflect that params is a Promise
interface PageProps {
  params: Promise<{ category: string }>;
}

// Refactor the component to await the params
const Page = async ({ params }: PageProps) => {
  // Wait for the params to resolve
  const { category } = await params;

  // Filter products based on the category
  const filteredProducts: Product[] =
    (products as ProductsByCategory)[category] || [];

  return (
    <div className="bg-white">
      <Category filteredProducts={filteredProducts} category={category} />
    </div>
  );
};

export default Page;
