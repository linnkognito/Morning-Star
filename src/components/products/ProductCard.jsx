import { useState } from "react";

import SizeSelector from "../ui/inputs/SizeSelector";
import ColorSelector from "../ui/inputs/ColorSelector";
import ActionButton from "../ui/buttons/ActionButton";
import Icon from "../common/Icon";
import RefineDropdown from "./menus/RefineDropdown";

const testColors = ["bg-aura", "bg-ember", "bg-zest"];

function ProductCard() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative flex min-h-[200px] max-w-[250px] flex-col rounded bg-pearl">
      <div className="h-[280px]">IMG</div>

      {showMenu && (
        <div className="absolute bottom-[68px] flex w-full flex-col">
          <RefineDropdown>
            <SizeSelector />
            <ColorSelector colors={testColors} height="h-[1.5em]" />
            <ActionButton className="gap-2 pt-0" fontSize="text-xl">
              <Icon name="shopping_basket" />
              Add to cart
            </ActionButton>
          </RefineDropdown>
        </div>
      )}

      <div className="flex w-full items-center justify-between overflow-hidden rounded-b bg-aura pl-2">
        <div className="flex h-full flex-col pt-2">
          <h2 className="font-bebas text-2xl tracking-widest">Title</h2>
          <h3 className="font-bebas text-lg tracking-widest">$120</h3>
        </div>
        <button
          className="font-base flex h-full w-[30%] items-center justify-center pt-1 font-bebas text-6xl transition-transform duration-300 ease-out will-change-transform hover:scale-110 hover:bg-pearl/50"
          onClick={() => setShowMenu((show) => !show)}
        >
          <span>{showMenu ? "-" : "+"}</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
