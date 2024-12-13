"use client";
import { useState } from "react";
import ShippingFooter from "./ShippingFooter";
import useCartStore from "@/app/store/CartStore"; // Assuming you have a Zustand store

const ShippingDetails: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    house: "",
    road: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { cart } = useCartStore(); // Access cart state from Zustand store

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "phoneNumber":
        return /^\d{10}$/.test(value) ? "" : "Phone Number must be 10 digits";
      case "pincode":
        return value.trim().length === 6 ? "" : "Pincode must be 6 digits";
      default:
        return value.trim() === "" ? `This field is required` : "";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleProceed = () => {
    const newErrors: { [key: string]: string } = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // WhatsApp logic after successful validation
    if (cart && cart.length > 0) {
      const itemTotal = cart.reduce(
        (acc, item) => acc + item.cartquantity * item.price,
        0
      );
      const shippingCharges = 62;
      const totalAmount = itemTotal + shippingCharges;


      const message = encodeURIComponent(
        ` *Tessele Foods*\n` +
          `Eat Fresh, Stay Fresh\n\n` +
          `*Date*: ${new Date().toLocaleDateString()}\n\n` +
          `*SHIPPING DETAILS*\n` +
          `---------------------------\n` +
          `Name:              ${formData.fullName}\n` +
          `Phone Number:      ${formData.phoneNumber}\n` +
          `Address:           ${formData.house}, ${formData.road}, ${formData.city}, ${formData.state}, ${formData.pincode}\n\n\n` +
          `*ITEMS*\n` +
          `---------------------------\n` +
          cart
            .map(
              (item) =>
                `${item.name.padEnd(20)} ${("x" + item.cartquantity).padEnd(5)} ₹${(item.price * item.cartquantity).toFixed(2).padStart(8)}`
            )
            .join("\n") +
          `\n\n\n` +
          `*BILL SUMMARY*\n` +
          `---------------------------\n` +
          `Item Total:        ₹${itemTotal.toFixed(2)}\n` +
          `Shipping Charges:  ₹${shippingCharges.toFixed(2)}\n` +
          `Total Amount:      ₹${totalAmount.toFixed(2)}\n\n\n` +
          `*PAYMENT INFO*\n` +
          `---------------------------\n` +
          `Payment will be processed by the seller.\n\n` +
          `THANK YOU FOR SHOPPING WITH US!`
      );

      const whatsappLink = `https://wa.me/919597463218?text=${message}`;
      window.open(whatsappLink, "_blank");
    } else {
      alert("Your cart is empty.");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleProceed(); // Call handleProceed on form submission
      }}
      className="grid-container mt-[50px] pb-[180px]"
    >
      <div className="col-start-1 col-end-5 flex items-center">
        <h1 className="font-proximasemibold leading-[18px] tracking-[1px] text-black text-[14px] mr-[12px]">
          SHIPPING DETAILS
        </h1>
        <hr className="border-0 border-t-[1px] border-linear-gradient(90deg, #02060C 10%, #ffffff 100%) flex-grow" />
      </div>
      <div className="rounded-[20px] col-start-1 col-end-5 px-[25px] py-[19px] bg-white mt-[16px]">
        <div className="flex flex-col my-[30px] font-proximasemibold text-[14px] leading-[17px] text-[#02060C]">
          {[
            { name: "fullName", placeholder: "FULL NAME *" },
            { name: "phoneNumber", placeholder: "PHONE NUMBER *", type: "tel" },
            { name: "house", placeholder: "HOUSE / FLAT / DOOR NO *" },
            { name: "road", placeholder: "ROAD / AREA / COLONY *" },
            { name: "state", placeholder: "STATE *" },
            { name: "city", placeholder: "CITY *" },
          ].map(({ name, placeholder, type = "text" }, index) => (
            <div key={name} className={`mt-[${index === 0 ? "0" : "40"}px]`}>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name as keyof typeof formData]}
                onChange={handleInputChange}
                required
                className="border-b-[1px] border-[#DDDCE2] focus:outline-none w-full"
              />
              {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Pincode */}
          <div className="mt-[40px]">
            <input
              type="text" // Changed to text to allow leading zeros
              name="pincode"
              placeholder="PINCODE *"
              value={formData.pincode}
              onChange={handleInputChange}
              required
              className="border-b-[1px] border-[#DDDCE2] focus:outline-none w-full"
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm">{errors.pincode}</p>
            )}
          </div>
        </div>
      </div>
      <ShippingFooter onProceed={handleProceed} />{" "}
      {/* Pass handleProceed as prop to ShippingFooter */}
    </form>
  );
};

export default ShippingDetails;
