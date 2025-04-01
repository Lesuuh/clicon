import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

const PriceSlider = () => {
  const customColor = "#FA8232";

  // State to store the slider values
  const [sliderValues, setSliderValues] = useState([500, 2500]);

  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    setSliderValues((prevState) => [prevState[0], newMax]);
  };

  const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    setSliderValues((prevState) => [newMin, prevState[1]]);
  };

  return (
    <ChakraProvider resetCSS={false}>
      <div className="w-full max-w-md mx-auto">
        {/* Slider */}
        <RangeSlider
          aria-label={["min", "max"]}
          min={0}
          max={3000}
          defaultValue={[50, 3000]}
          value={sliderValues}
          onChange={(val) => setSliderValues(val)} // Update state on slider change
        >
          {/* Track */}
          <RangeSliderTrack bg="#E2E8F0">
            <RangeSliderFilledTrack bg={customColor} />
          </RangeSliderTrack>

          {/* Thumbs */}
          <RangeSliderThumb
            index={0}
            bg={customColor}
            _hover={{ boxShadow: `0 0 0 4px ${customColor}33` }}
          />
          <RangeSliderThumb
            index={1}
            bg={customColor}
            _hover={{ boxShadow: `0 0 0 4px ${customColor}33` }}
          />
        </RangeSlider>

        {/* Display the slider values */}
        <div className="flex justify-between text-sm font-medium mb-4 w-full">
          <input
            type="text"
            placeholder="Min price"
            onChange={(e) => handleChangeMin(e)}
            value={sliderValues[0]}
            className="max-w-30 px-2 py-1 border border-gray-200 placeholder:text-[.7rem] focus:outline-none text-gray-500 text-[.7rem] font-normal"
          />
          <input
            type="text"
            placeholder="Max price"
            onChange={(e) => handleChangeMax(e)}
            value={sliderValues[1]}
            className="max-w-30 px-2 py-1 border border-gray-200 placeholder:text-[.7rem] focus:outline-none text-gray-500 text-[.7rem] font-normal"
          />
        </div>
      </div>
    </ChakraProvider>
  );
};

export default PriceSlider;
