
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import yourhandle from "countrycitystatejson";
import { useAuthStore } from "@/store/authStore";

interface BillingFormProps {
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: number;
  email: string;
  phoneNumber: string;
  addInfo: string;
}

const CheckoutPage = () => {
  const userData = useAuthStore((state) => state.userData);
  console.log(userData);

  const firstName = userData.fullName.split(" ")[0];
  const lastName = userData.fullName.split(" ")[1];
  const email = userData.email;
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [billingFormDetails, setBillingFormDetails] = useState({
    firstName: firstName,
    lastName: lastName,
    companyName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    email: email,
    phoneNumber: "",
    addInfo: "",
  });

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

  return (
    <section className="my-10 mx-auto w-full h-auto max-w-[1400px] px-5 md:px-20 flex flex-col md:flex-row flex-wrap items-start  gap-10">
      <div className="flex-2">
        <h2 className="font-semibold text-[.8rem] mb-2">Billing Information</h2>
        <div className="text-[.7rem]">
          <form action="" className="flex flex-col gap-4">
            {/* names */}
            <div className="flex w-full flex-row items-center gap-3">
              <div className="w-full">
                {" "}
                <label htmlFor="name">Name</label>
                <div className="flex flex-row items-center w-full gap-2">
                  <input
                    type="text"
                    id="name"
                    name="firstName"
                    placeholder="First name"
                    defaultValue={firstName}
                    className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
                  />
                  <input
                    type="text"
                    id="name"
                    name="firstName"
                    placeholder="Last name"
                    defaultValue={lastName}
                    className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="company-name">
                  Company Name <span className="text-gray">(Optional)</span>
                  <input
                    type="text"
                    id="company-name"
                    name="companyName"
                    className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
                  />
                </label>
              </div>
            </div>
            {/* address */}
            <div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 w-full items-center gap-2 mt-3">
                <div>
                  <label htmlFor="country">Country</label>
                  <Select
                    value={selectedCountry}
                    onValueChange={handleCountryChange}
                  >
                    <SelectTrigger className="w-full border-gray-200 text-[.7rem] text-gray rounded-xs">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select your Country</SelectLabel>
                        {countries.map((country) => (
                          <SelectItem
                            key={country.shortName}
                            value={country.shortName}
                          >
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="country">State</label>
                  <Select
                    value={selectedState}
                    onValueChange={handleStateChange}
                  >
                    <SelectTrigger className="w-full  border-gray-200 text-[.7rem] text-gray rounded-xs">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select your state</SelectLabel>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="country">City</label>
                  <Select value={selectedCity} onValueChange={handleCityChange}>
                    <SelectTrigger className="w-full  border-gray-200 text-[.7rem] text-gray rounded-xs">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Select your city</SelectLabel>
                        {city.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="zip-code">Zip Code</label>
                  <input
                    type="text"
                    id="zip-code"
                    name="zip-code"
                    className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
                  />
                </div>
              </div>
            </div>
            {/* email and phone */}
            <div className="space-y-2">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={email}
                  className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
                />
              </div>
              <div>
                <label htmlFor="phone-number">Phone number</label>
                <input
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
                />
              </div>
            </div>
            <div>
              <p className="text-[.8rem] font-semibold">
                Additional Information
              </p>
              <div>
                <label htmlFor="add-info">Order notes</label>
                <textarea
                  name="add-info"
                  //   cols={30}
                  rows={4}
                  id="add-info"
                  placeholder="Notes about your order, e.g special notes for delivery"
                  className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
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
        <Link
          to={"/checkout"}
          className="text-white bg-primary py-1 rounded-xs flex items-center w-full justify-center mt-3 gap-2 text-[.8rem]"
        >
          PLACE ORDER <ArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default CheckoutPage;
