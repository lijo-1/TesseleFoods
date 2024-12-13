  "use client";
  import { PiShoppingCartSimpleLight } from "react-icons/pi";
  import useCartStore from "@/app/store/CartStore";
  // import SearchBar from "./SearchBar";
  import Link from "next/link";

  const Header = () => {
    const { cart } = useCartStore();
    const totalItems = cart.reduce((acc, item) => acc + item.cartquantity, 0);

    return (
      <div className="grid-container bg-[#00A550] text-white py-[35px] place-content-center rounded-b-[16px] sticky top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center col-start-1 col-end-5">
          <div>
            <h1 className="leading-9 tracking-[-0.35px] font-proximaextrabold text-[30px]">
              Tessele Foods
            </h1>
            <p className="leading-[18px] tracking-[-0.35px] font-proximaregular text-[14px] mt-[-3px] ml-[3px]">
              Eat fresh ,Stay fresh
            </p>
          </div>

          <Link href={`/cart`}>
            <div className="relative p-[6px] cursor-pointer">
              <div className="bg-white rounded-[50px] p-[6px] mb-3">
                <PiShoppingCartSimpleLight className="text-black " size={22} />
              </div>
              {totalItems > 0 && (
                <div className="absolute top-[0px] right-[0px] bg-[#5d148e] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ">
                  {totalItems}
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* Add the SearchBar component */}
        {/* <SearchBar /> */}
      </div>
    );
  };

  export default Header;
