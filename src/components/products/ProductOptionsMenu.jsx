import { useState } from "react";
import Button from "../ui/buttons/Button";

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

function ProductOptionsMenu() {
  const [maxPrice, setMaxPrice] = useState(120);

  return (
    <div className="text-md grid h-full min-h-8 w-full cursor-pointer grid-cols-[6fr_1fr_2fr_1fr] bg-offblack text-center font-bebas text-lg font-medium uppercase tracking-widest text-pearl transition-all duration-200">
      {/* Sizes */}
      <div className="flex justify-evenly">
        {sizes.map((size) => (
          <button
            key={size}
            className="w-full border border-y-0 first:border-l-0 last:border-r-0"
          >
            {size}
          </button>
        ))}
      </div>

      {/* Price or Quantity */}
      <Button
        type="inverted"
        className="h-full w-full active:bg-aura active:text-offblack"
        onClick={() => setMaxPrice(maxPrice - 5)}
      >
        <h2 className="text-3xl">-</h2>
      </Button>

      <div className="flex min-h-full w-full items-center">
        <span className="text-3xl">$</span>
        <input
          type="text"
          className="h-full bg-offblack text-3xl text-pearl outline-none placeholder:text-pearl"
          defaultValue={`${maxPrice}`}
        />
      </div>

      <Button
        type="inverted"
        className="h-full w-full active:bg-aura active:text-offblack"
        onClick={() => setMaxPrice(maxPrice + 5)}
      >
        <h2 className="text-3xl">+</h2>
      </Button>

      {/* Row 2: Color */}
      <div className="col-span-4 flex w-full">
        <div className="h-[52px] grow bg-ember"></div>
        <div className="h-[52px] grow bg-zest"></div>
        <div className="h-[52px] grow bg-aura"></div>
        <div className="bg-black h-[52px] grow"></div>
      </div>

      {/* Row 3: Actions */}
      <div className="col-span-4 flex gap-[1px] bg-pearl">
        <button className="z-50 grow bg-offblack">Delete</button>
        <button className="z-50 grow bg-offblack">Save</button>
      </div>
    </div>
  );
}

export default ProductOptionsMenu;
