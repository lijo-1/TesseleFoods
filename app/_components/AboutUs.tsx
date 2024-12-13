// import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-[#5D89BA] grid-container rounded-t-[16px]">
      <div className="text-white pt-[50px] col-start-1 col-end-4">
        <h1 className="tracking-[-0.35px] font-proximaextrabold text-[32px]">
          About Us
        </h1>
        <p className="mt-[25px] leading-normal tracking-[-0.35px] font-proximaregular text-[16px] pb-[64px] text-justify">
          From a humble home-based start in Kerala to a beloved brand, Tessele
          Food offers <span className="font-proximaextrabold">FSSAI</span>{" "}
          certified organic malt powders, beverages, handcrafted soaps, and
          home-ground masalas. Loved by our happy customers, we deliver nature’s
          purity and wellness in every product. Taste health, live organic, and
          join our journey!
        </p>
      </div>
      {/* <div className="self-center">
        <Image
          src="/images/about.png"
          alt="about"
          width={32}
          height={32}
          className="w-[150px] h-[227px] self-center absolute overflow-x-hidden"
        ></Image>
      </div> */}
    </div>
  );
};

export default AboutUs;
