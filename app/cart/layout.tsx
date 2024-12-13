import CartFooter from "./_components/CartFooter";
import CartHeader from "./_components/CartHeader";

export const metadata = {
  title: "Tessele Foods | Cart",
  description: "This is my cart Page",
};

const cartlayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <div className=" lg:mx-[250px] bg-[#F0F0F5]">
      <CartHeader />
      {children}
      <CartFooter/>
    </div>
  );
};

export default cartlayout;
