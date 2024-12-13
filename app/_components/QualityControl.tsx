'use client';
import { HiPlus, HiMinus } from "react-icons/hi";
import useCartStore from "@/app/store/CartStore";

type QualityControlProps = {
  isAbsolute?: boolean;
  productId: number; 
  onIncrease: () => void;
  onDecrease: () => void;
};

const QualityControl = ({
  isAbsolute = true,
  productId,
  onIncrease,
  onDecrease,
}: QualityControlProps) => {
  const { cart } = useCartStore();

  // Find the product's current quantity
  const product = cart.find((item) => item.id === productId); // Updated comparison to match number
  const quantity = product ? product.cartquantity : 0;

  return (
    <div
      className={`flex shadow-[0px_4.35px_11.6px_0px_rgba(40,44,63,0.08)] ${
        isAbsolute ? "absolute top-0 right-0" : ""
      }`}
    >
      <div
        onClick={onDecrease}
        className="flex items-center p-[6px] border-[0.73px] rounded-l-lg border-[#02060C] border-opacity-[25%] max-w-fit bg-white cursor-pointer"
      >
        <HiMinus className="w-[16px] h-[16px] text-[#1BA672]" />
      </div>
      <div className="flex items-center py-[2px] px-[10px] border-[0.73px] text-white border-[#02060C] border-opacity-[25%] max-w-fit bg-[#00A550]">
        <p>{quantity}</p>
      </div>
      <div
        onClick={onIncrease}
        className="bg-white flex items-center p-[6px] border-[0.73px] rounded-r-lg border-[#02060C] border-opacity-[25%] max-w-fit cursor-pointer"
      >
        <HiPlus className="w-[16px] h-[16px] text-[#1BA672]" />
      </div>
    </div>
  );
};

export default QualityControl;
