import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white place-self-center">
      <Image
        src="/images/hero.png"
        alt="heroimage"
        width={500}
        height={500}
        className="w- h-1/2 object-cover"
      />
    </div>
  );
};

export default Hero;
