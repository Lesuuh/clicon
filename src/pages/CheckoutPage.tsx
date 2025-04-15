import { Separator } from "@/components/ui/separator";
// import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import yourhandle from "countrycitystatejson";
// import { useAuthStore } from "@/store/authStore";
import CheckoutBillingForm from "@/components/CheckoutBillingForm";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
// import { Button } from "@/components/ui/button";

// interface BillingFormProps {
//   firstName: string;
//   lastName: string;
//   companyName: string;
//   address: string;
//   country: string;
//   state: string;
//   city: string;
//   zipCode: number;
//   email: string;
//   phoneNumber: string;
//   addInfo: string;
// }

const CheckoutPage = () => {
  //   const userData = useAuthStore((state) => state.userData);
  //   const firstName = userData?.fullName.split(" ")[0];
  //   const lastName = userData?.fullName.split(" ")[1];
  //   const email = userData?.email;
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [billingFormDetails, setBillingFormDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
    addInfo: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBillingFormDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const navigate = useNavigate();
  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setBillingFormDetails((prevDetails) => ({
      ...prevDetails,
      country: value,
    }));
  };

  const handleStateChange = (value) => {
    setSelectedState(value);
    setBillingFormDetails((prevDetails) => ({ ...prevDetails, state: value }));
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
    setBillingFormDetails((prevDetails) => ({ ...prevDetails, city: value }));
  };

  console.log(billingFormDetails);

  const countries = yourhandle.getCountries();
  const states = selectedCountry
    ? yourhandle.getStatesByShort(selectedCountry)
    : [];
  const city = selectedState
    ? yourhandle.getCities(selectedCountry, selectedState)
    : [];

  console.log(billingFormDetails.email);

  // PAYSTACK CONFIG
  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: billingFormDetails.email,
    amount: 20000,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    metadata: {
      fullName: `${billingFormDetails.firstName} ${billingFormDetails.lastName}`,
      companyName: billingFormDetails.companyName,
      address: billingFormDetails.address,
      country: billingFormDetails.country,
      state: billingFormDetails.state,
      city: billingFormDetails.city,
      zipCode: billingFormDetails.zipCode,
      phoneNumber: billingFormDetails.phoneNumber,
      addInfo: billingFormDetails.addInfo,
    },
  };

  const onSuccess = async (reference) => {
    const order = {
      transactionRef: reference.reference,
      billingDetails: billingFormDetails,
      //   orderItems: cart,
      totalAmount: paystackConfig.amount,
      paidAt: new Date().toISOString(),
      status: "paid",
    };

    console.log(order);

    // // save the data to backend
    // await fetch("http://localhost/users/orders", {
    //   method: "POST",
    //   headers: { "Content-Type:": "application/json" },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json)
    //   .then(() => navigate("/checkout-success"));
    navigate("/checkout-success");
  };

  const onClose = () => {
    console.log("closed");
    toast.error("Payment Not Completed");
  };

  const verifyEmailInput = () => {
    if (!billingFormDetails.email) {
      toast.error("Please enter your email address.");
    }
  };

  const componentProps = {
    ...paystackConfig,
    text: "PLACE ORDER",
    onSuccess: (reference) => onSuccess(reference),
    onClose: onClose,
  };

  return (
    <section className="my-10 mx-auto w-full h-auto max-w-[1400px] px-5 md:px-20 flex flex-col md:flex-row flex-wrap items-start  gap-10">
      <CheckoutBillingForm
        countries={countries}
        states={states}
        city={city}
        selectedCountry={selectedCountry}
        selectedState={selectedState}
        selectedCity={selectedCity}
        handleCityChange={handleCityChange}
        handleCountryChange={handleCountryChange}
        handleStateChange={handleStateChange}
        handleFormChange={handleFormChange}
        billingFormDetails={billingFormDetails}
      />

      <div className="w-full flex-1 border p-4 border-gray-300">
        <h3 className="text-[.9rem] font-semibold">Order Summary</h3>
        <div>
          <div className="flex items-center w-full justify-between text-[.8rem] py-1">
            <p>Sub-total</p>
            <p>$320</p>
          </div>
          <div className="flex items-center w-full justify-between text-[.8rem] py-1">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex items-center w-full justify-between text-[.8rem] py-1">
            <p>Discount</p>
            <p>$20</p>
          </div>
          <div className="flex items-center w-full justify-between text-[.8rem] py-1">
            <p>Tax</p>
            <p>$61.99</p>
          </div>
        </div>
        <Separator className="w-full my-2 border-t border-gray-300" />
        <div className="flex items-center w-full justify-between text-[.9rem] py-1">
          <p>Total</p>
          <p>$3334</p>
        </div>
        {billingFormDetails.email ? (
          <PaystackButton
            {...componentProps}
            className="text-white  bg-primary py-1 rounded-xs flex items-center w-full justify-center mt-3 gap-2 text-[.7rem]"
          />
        ) : (
          <button
            onClick={() =>
              toast.error("Please fill in your billing information")
            }
            className="text-white bg-primary py-1 rounded-xs flex items-center w-full justify-center mt-3 gap-2 text-[.7rem]"
          >
            PLACE ORDER
          </button>
        )}
      </div>
    </section>
  );
};

export default CheckoutPage;
