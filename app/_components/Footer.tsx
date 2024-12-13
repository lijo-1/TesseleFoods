import { CiInstagram } from "react-icons/ci";
import { RiFacebookBoxFill } from "react-icons/ri";

import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#00693E] grid-container text-white font-proximaregular leading-[20px] tracking-[-0.35px]  text-[16px] ">
      <div className=" col-start-1 col-end-5 pt-[50px]">
        <h1 className="leading-normal tracking-[-0.35px] font-proximaextrabold text-[32px]">
          Let&apos;s stay connected.
        </h1>
        <p className=" mt-[28px] ">
          Maniya kararkalam, <br /> Eruthenpathy,Kozhinjampara,
          <br /> Palakkad, <br /> Kerala-678555
        </p>
        <div className="flex mt-[16px]">
          <Link href="https://facebook.com" passHref>
            <RiFacebookBoxFill size={32} className="mr-[5px]" />
          </Link>
          <Link href="https://instagram.com" passHref>
            <CiInstagram size={32} />
          </Link>
        </div>
        <p  className="mt-[15px] text-center text-[14px]">Brewed with ☕ and ❤️ by Lijo</p>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Footer;
