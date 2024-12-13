  "use client";
  import CardComponent from "@/app/_components/CardComponent";
  import QualityControl from "@/app/_components/QualityControl";
  import useCartStore from "@/app/store/CartStore";

  const ReviewOrder = () => {
    const { cart, increaseQuantity, decreaseQuantity } = useCartStore(); // Access cart items
    const totalItems = cart.reduce((acc, item) => acc + item.cartquantity, 0); // Calculate total items in cart

    return (
      <div className="grid-container mt-[40px] mb-[50px]">
        <div className="col-start-1 col-end-5 flex items-center">
          <h1 className="font-proximasemibold leading-[18px] tracking-[1px] text-black text-[14px] mr-[12px]">
            REVIEW YOUR ORDER
          </h1>
          <hr className="border-0 border-t-[1px] border-linear-gradient(90deg, #02060C 10%, #ffffff 100%) flex-grow" />
        </div>

        <div className="rounded-[20px] col-start-1 col-end-5 px-[16px] pb-[18px] bg-white mt-[16px]">
          <div className="flex items-center mt-[25px]">
            <hr className="border-0 border-t-[1px] border-linear-gradient(90deg, #02060C 10%, #ffffff 100%) flex-grow mr-[15px]" />
            <h1 className="font-proximasemibold tracking-[-0.35px] text-black text-[14px]">
              {totalItems} items
            </h1>
          </div>
          <div className="">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mt-[10px]">
                <CardComponent
                  showPlusImage={false}
                  showPrice={false}
                  customStyles="flex-row items-center"
                  imageStyles="w-[65px] h-[65px]"
                  textStyles="text-[14px] ml-[14px] mt-[0px]"
                  spaceStyles="mt-[3px]"
                  product={item}
                />
                <div className="ml-auto flex items-center w-[150px] justify-between">
                  <QualityControl
                    isAbsolute={false}
                    productId={item.id}
                    onIncrease={() => increaseQuantity(item.id)}
                    onDecrease={() => decreaseQuantity(item.id)}
                  />
                  <p className="font-proximasemibold leading-[20px] text-[14px] tracking-[-0.35px]  ">
                    ₹{item.price * item.cartquantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default ReviewOrder;
