import { useState } from "react";
import Button from "../ui/buttons/Button";

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

function ProductOptionsMenu() {
  const defaultPrice = 120;
  const [maxPrice, setMaxPrice] = useState(defaultPrice);

  const handleChange = (e) => {
    const price = e.target.value;
    if (!/^\d*$/.test(price)) return; // only allow numbers

    if (+price < 0) return setMaxPrice(1);
    setMaxPrice(+price);
  };

  const handleClick = (op) => {
    const newPrice = op === "dec" ? +maxPrice - 1 : +maxPrice + 1;
    if (newPrice <= 0) return setMaxPrice(1);
    setMaxPrice(newPrice);
  };

  return (
    <div className="text-md grid h-full min-h-8 w-full cursor-pointer grid-cols-2 bg-offblack text-center font-bebas text-lg font-medium uppercase tracking-widest text-pearl transition-all duration-200">
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
      <div className="grid grid-cols-3 items-center justify-center">
        <Button
          type="inverted"
          className="h-full w-full active:bg-aura active:text-offblack"
          onClick={() => handleClick("dec")}
        >
          <h2 className="text-3xl">-</h2>
        </Button>

        <div className="flex w-full items-center justify-center gap-1 pl-2 pr-1">
          <span className="text-3xl">$</span>
          <input
            type="text"
            className="h-full w-full bg-offblack text-3xl text-pearl outline-none placeholder:text-pearl"
            // defaultValue={maxPrice}
            value={maxPrice}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <Button
          type="inverted"
          className="h-full w-full active:bg-aura active:text-offblack"
          onClick={() => handleClick("inc")}
        >
          <h2 className="text-3xl">+</h2>
        </Button>
      </div>

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
