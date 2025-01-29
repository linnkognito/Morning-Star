import { useState } from "react";

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

function ProductOptionsMenu({ handleClick }) {
  const defaultPrice = 120;
  const [maxPrice, setMaxPrice] = useState(defaultPrice);

  return (
    <div className="text-md flex h-full w-full cursor-pointer flex-col gap-3 rounded border-2 border-zest bg-zest/80 px-2 py-3 text-center font-bebas text-lg font-medium tracking-widest text-pearl transition-all duration-200">
      {/* Sizes */}
      <div className="flex items-center justify-evenly gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            className="h-fit w-full rounded bg-pearl py-1 uppercase text-offblack shadow-sm shadow-offblack transition-all duration-300 ease-out will-change-transform hover:scale-105 hover:bg-aura active:bg-zest"
          >
            {size}
          </button>
        ))}
      </div>
      {/* Price or Quantity */}
      <div className="flex w-full items-center gap-3 px-2 text-offblack">
        <span className="text-2xl">Max</span>

        <input
          className="w-full"
          id="maxPrice"
          type="range"
          min="1"
          max="300"
          step="1"
          value={maxPrice}
          onChange={(e) => setMaxPrice(+e.target.value)}
        />

        <span className="text-2xl">${maxPrice}</span>
      </div>
      {/* Row 2: Color */}
      <div className="flex w-full gap-2">
        <div className="h-[52px] grow rounded bg-ember shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform hover:scale-105"></div>
        <div className="h-[52px] grow rounded bg-zest shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform hover:scale-105"></div>
        <div className="h-[52px] grow rounded bg-aura shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform hover:scale-105"></div>
        <div className="h-[52px] grow rounded bg-pearl shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform hover:scale-105"></div>
      </div>
      {/* Row 3: Actions */}
      {/* {showActionButtons && (
        <div className="col-span-4 flex gap-[1px] bg-pearl">
          <button className="z-50 grow bg-offblack">Delete</button>
          <button className="z-50 grow bg-offblack">Save</button>
        </div>
      )}*/}

      <button
        className="mx-auto mt-2 flex w-2/3 grow items-center justify-center gap-1 rounded bg-pearl text-2xl leading-10 text-offblack shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:bg-aura"
        onClick={() => handleClick("filter")}
      >
        Apply filters
      </button>
    </div>
  );
}

export default ProductOptionsMenu;
