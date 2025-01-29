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
    <div className="text-md grid h-full w-full cursor-pointer grid-cols-1 gap-1 bg-zest p-2 pt-1 text-center font-bebas text-lg font-medium tracking-widest text-pearl transition-all duration-200 lg:grid-cols-2">
      {/* Sizes */}
      <div className="flex items-center justify-evenly border border-offblack">
        {sizes.map((size) => (
          <button
            key={size}
            className="h-full w-full border bg-pearl uppercase text-offblack transition-colors duration-300 last:border-r-0 hover:bg-aura active:bg-zest"
          >
            {size}
          </button>
        ))}
      </div>

      {/* Price or Quantity */}

      <div className="grid w-full grid-cols-3 items-center justify-center border-2 border-offblack">
        <Button
          type="operations"
          className="border-r-2 border-transparent hover:border-offblack"
          onClick={() => handleClick("dec")}
        >
          <h2 className="text-3xl">-</h2>
        </Button>

        {/* Price input */}
        <div className="flex h-full w-full items-center justify-center gap-1 border-0 bg-pearl pl-2 pr-1 text-offblack">
          <span className="text-3xl">$</span>
          <input
            type="text"
            className="h-full w-full bg-pearl text-3xl text-offblack outline-none placeholder:text-offblack"
            // defaultValue={maxPrice}
            value={maxPrice}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <Button
          type="operations"
          className="border-l-2 border-transparent hover:border-offblack"
          onClick={() => handleClick("inc")}
        >
          <h2 className="text-3xl">+</h2>
        </Button>
      </div>

      {/* Row 2: Color */}
      <div className="flex w-full border-2 border-offblack lg:col-span-2">
        <div className="h-[52px] grow bg-ember"></div>
        <div className="h-[52px] grow bg-zest"></div>
        <div className="h-[52px] grow bg-aura"></div>
        <div className="h-[52px] grow bg-pearl"></div>
        <div className="h-[52px] grow bg-offblack"></div>
      </div>

      {/* Row 3: Actions */}
      {/* {showActionButtons && (
        <div className="col-span-4 flex gap-[1px] bg-pearl">
          <button className="z-50 grow bg-offblack">Delete</button>
          <button className="z-50 grow bg-offblack">Save</button>
        </div>
      )}

      {showAddToCartButton && (
        <button className="z-50 flex grow items-center justify-center gap-1 bg-offblack text-2xl leading-10 text-pearl hover:bg-pearl hover:text-offblack">
          <span>Add to cart</span>
          <span className="text-4xl">+</span>
        </button>
      )} */}
    </div>
  );
}

export default ProductOptionsMenu;
