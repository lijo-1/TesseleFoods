"use client";
import useCartStore from "@/app/store/CartStore";

const Bill = () => {
  const { cart } = useCartStore();

  // If there are no items in the cart, default to 0
  const itemTotal =
    cart.length > 0
      ? cart.reduce((acc, item) => acc + item.cartquantity * item.price, 0)
      : 0; // Calculate Item Total only if the cart has items

  const shippingCharges = 62;
  const totalAmount = itemTotal + shippingCharges;

  return (
    <div className="min-h-[55vh] flex flex-col">
      {/* Make sure the main container takes the full screen */}
      <div className="grid-container   flex-shrink">
        <div className="col-start-1 col-end-5 flex items-center">
          <h1 className="font-proximasemibold leading-[18px] tracking-[1px] text-black text-[14px] mr-[12px]">
            BILL DETAILS
          </h1>
          <hr className="border-0 border-t-[1px] border-linear-gradient(90deg, #02060C 10%, #ffffff 100%) flex-grow" />
        </div>
        <div className="rounded-[20px] col-start-1 col-end-5 px-[16px] py-[19px] bg-white mt-[16px]">
          <div>
            <div className="flex justify-between items-center">
              <p className="font-proximasemibold leading-[17px] text-[14px] tracking-[-0.33px] text-[#02060C] opacity-[70%]">
                Item Total
              </p>
              <p className="font-proximasemibold leading-[20px] text-[14px] tracking-[-0.35px] ml-[20px]">
                ₹{itemTotal}
              </p>
            </div>

            {cart.length > 0 && (
              <>
                <div className="flex justify-between items-center mt-[12px]">
                  <p className="font-proximasemibold leading-[17px] text-[14px] tracking-[-0.33px] text-[#02060C] opacity-[70%]">
                    Shipping Charges
                  </p>
                  <p className="font-proximasemibold leading-[20px] text-[14px] tracking-[-0.35px] ml-[20px]">
                    ₹{shippingCharges}
                  </p>
                </div>
                <div className="mt-[12px]">
                  <hr className="border-0 border-t-[1px] border-linear-gradient(90deg, #02060C 10%, #ffffff 100%) flex-grow" />
                  <div className="flex justify-between items-center mt-[12px]">
                    <p className="font-proximasemibold text-[16px] tracking-[-0.33px] text-black">
                      To Pay
                    </p>
                    <p className="font-proximasemibold text-[16px] tracking-[-0.33px] ml-[20px]">
                      ₹{totalAmount}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
