import CartHeader from "../cart/_components/CartHeader";

export const metadata = {
  title: "Tessele Foods | Shipping",
  description: "This is my Shipping Page",
};

const layout = ({ children }) => {
  return (
    <div className=" lg:mx-[250px] bg-[#F0F0F5]">
      <CartHeader heading="Shipping Info" customStyles={"bg-[#5D89BA]"} />
      {children}
    </div>
  );
};

export default layout;
