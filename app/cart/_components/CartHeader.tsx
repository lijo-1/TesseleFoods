import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

type CardProps = {
  heading?: string;
  customStyles?: string;
};
const CartHeader = ({
  heading = "Your Cart",
  customStyles = "",
}: CardProps) => {
  return (
    <div className=" bg-[#F0F0F5]">
      <div
        className={`grid-container bg-[#00A550] text-white pb-[30px] rounded-b-[16px] ${customStyles}`}
      >
        <div className="flex  items-center pt-[53px] col-start-1 col-end-5">
          <Link href={"/"}>
            <IoArrowBack size={26} />
          </Link>
          <h1 className="ml-[14px] leading-9 tracking-[-0.35px] font-proximaextrabold text-[30px]">
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
