"use client";

import useCartStore from "@/app/store/CartStore";
import Link from "next/link";

const CartFooter = () => {
  const { cart } = useCartStore(); // Access the cart items

  if (cart.length === 0) return null; // Don't render if cart is empty

  const itemTotal = cart.reduce(
    (acc, item) => acc + item.cartquantity * item.price,
    0
  );
  const shippingCharges = 62; // Example fixed shipping charges
  const totalAmount = itemTotal + shippingCharges;

  return (
    <div className="bg-transparent fixed bottom-0 left-0 lg:mx-[250px] lg:w-[calc(100%-500px)] w-full">
      <div className="bg-white">
        <div className="bg-[#27AA66] pl-[38px] py-[8px] rounded-t-[16px] ">
          <p className="font-proximaextrabold tracking-[-0.33px] text-white text-[16px]">
            {`To Pay: ₹${totalAmount}`}
          </p>
        </div>

        {/* Proceed Button */}
        <div className="py-[20px]">
          <Link href="/shipping">
            <div className="mx-[67px] bg-[#00693E] rounded-[10px] lg:w-1/2 place-self-center">
              <p className="font-proximaextrabold text-[18px] tracking-[-0.33px] text-white px-[105px] py-[11px] text-center">
                Proceed
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
