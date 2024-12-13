interface ShippingFooterProps {
    onProceed: () => void; // Add a prop to handle proceed button click
  }
  
  const ShippingFooter: React.FC<ShippingFooterProps> = ({ onProceed }) => {
    return (
      <div className="bg-transparent fixed bottom-0 left-0 lg:mx-[250px] lg:w-[calc(100%-500px)] w-full">
        <div className="bg-white">
          <div className="bg-[#819FC0] pl-[38px] py-[8px] rounded-t-[16px]">
            <p className="font-proximaextrabold tracking-[-0.33px] text-white text-[14px]">
              Note: Orders are placed via WhatsApp; payment will be initiated by
              the seller.
            </p>
          </div>
  
          {/* Proceed Button */}
          <div className="py-[20px]">
            <div
              onClick={onProceed} // Trigger the onProceed function when clicked
              className="mx-[67px] rounded-[10px] bg-[#5D89BA] lg:w-1/2 place-self-center cursor-pointer"
            >
              <p className="font-proximaextrabold text-[18px] tracking-[-0.33px] text-white px-[105px] py-[11px] text-center">
                Proceed
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShippingFooter;
  