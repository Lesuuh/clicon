import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuthStore } from "@/store/authStore";

const CheckoutBillingForm = ({
  countries,
  states,
  city,
  selectedCountry,
  selectedState,
  selectedCity,
  handleCityChange,
  handleCountryChange,
  handleStateChange,
  handleFormChange,
  billingFormDetails,
}) => {
  //   const userData = useAuthStore((state) => state.userData);
  //   const firstName = userData?.fullName.split(" ")[0];
  //   const lastName = userData?.fullName.split(" ")[1];
  //   const email = userData?.email;
  return (
    <div className="flex-2">
      <h2 className="font-semibold text-[.8rem] mb-2">Billing Information</h2>
      <div className="text-[.7rem]">
        <form className="flex flex-col gap-4">
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
                  value={billingFormDetails.firstName}
                  onChange={handleFormChange}
                  className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
                />
                <input
                  type="text"
                  id="name"
                  name="lastName"
                  placeholder="Last name"
                  value={billingFormDetails.lastName}
                  onChange={handleFormChange}
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
                  value={billingFormDetails.companyName}
                  onChange={handleFormChange}
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
                value={billingFormDetails.address}
                onChange={handleFormChange}
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
                <Select value={selectedState} onValueChange={handleStateChange}>
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
                  name="zipCode"
                  value={billingFormDetails.zipCode}
                  onChange={handleFormChange}
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
                value={billingFormDetails.email}
                onChange={handleFormChange}
                className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
              />
            </div>
            <div>
              <label htmlFor="phone-number">Phone number</label>
              <input
                type="number"
                name="phoneNumber"
                id="phone-number"
                value={billingFormDetails.phoneNumber}
                onChange={handleFormChange}
                className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
              />
            </div>
          </div>
          <div>
            <p className="text-[.8rem] font-semibold">Additional Information</p>
            <div>
              <label htmlFor="add-info">Order notes</label>
              <textarea
                name="addInfo"
                //   cols={30}
                rows={4}
                id="add-info"
                value={billingFormDetails.addInfo}
                onChange={handleFormChange}
                placeholder="Notes about your order, e.g special notes for delivery"
                className="w-full py-1.5 px-2 border border-gray-200 rounded-xs"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutBillingForm;
