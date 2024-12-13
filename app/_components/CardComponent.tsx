'use client';
import { HiPlus } from "react-icons/hi";
import Image from "next/image";
import useCartStore from "@/app/store/CartStore";
import QualityControl from "./QualityControl";

type Product = {
  id: number; 
  name: string;
  price: number;
  quantity: string;
};

type CardProps = {
  showPlusImage?: boolean;
  showPrice?: boolean;
  customStyles?: string;
  imageStyles?: string;
  textStyles?: string;
  spaceStyles?: string;
  product?: Product;
};

const CardComponent = ({
  showPlusImage = true,
  showPrice = true,
  customStyles = "",
  imageStyles = "",
  textStyles = "",
  spaceStyles = "",
  product,
}: CardProps) => {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCartStore();

  if (!product) {
    return <div>Product data is missing.</div>;
  }

  console.log(cart);
  const isInCart = cart.some((item) => item.id === product.id); 

  return (
    <div className={`flex relative pt-[10px] pr-[8px] ${customStyles}`}>
      {/* Quality Control or Add to Cart Button */}
      {showPlusImage && (
        <div className="absolute top-0 right-0">
          {isInCart ? (
            <QualityControl
              isAbsolute={false}
              productId={product.id}
              onIncrease={() => increaseQuantity(product.id)}
              onDecrease={() => decreaseQuantity(product.id)} 
            />
          ) : (
            <div
              onClick={() => addToCart(product)} 
              className="bg-white flex items-center p-[6px] border-[0.73px] rounded-lg border-[#02060C] border-opacity-[25%] max-w-fit shadow-[0px_4.35px_11.6px_0px_rgba(40,44,63,0.08)] cursor-pointer"
            >
              <HiPlus className="w-[16px] h-[16px] text-[#1BA672]" />
            </div>
          )}
        </div>
      )}

      {/* Product Image */}
      <div className="border-[1.5px] rounded-lg border-[#282C3F] border-opacity-[5%]">
        <Image
          src="/images/pro.png"
          alt={product.name}
          width={500}
          height={500}
          className={`w-[104.76px] h-[109.79px] ${imageStyles}`}
        />
      </div>

      {/* Product Details */}
      <div className={`mt-[8px] text-[14px] ${textStyles}`}>
        <p className="font-proximasemibold leading-[17px] tracking-[-0.38px]">
          {product.name}
        </p>
        <p className={`mt-[10px] font-proximaregular leading-[18px] tracking-[-0.35px] ${spaceStyles}`}>
          {product.quantity}
        </p>
        {showPrice && (
          <p className="mt-[10px] font-proximasemibold leading-[18px] tracking-[-0.35px]">
            ₹{product.price}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
