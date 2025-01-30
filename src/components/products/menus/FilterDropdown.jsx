import { useState } from "react";

import SizeSelector from "../../ui/inputs/SizeSelector";
import RangeSelector from "../../ui/inputs/RangeSelector";
import ColorSelector from "../../ui/inputs/ColorSelector";
import ActionButton from "../../ui/buttons/ActionButton";
import RefineDropdown from "./RefineDropdown";

const colorsArr = ["bg-ember", "bg-zest", "bg-aura", "bg-pearl", "bg-offblack"];

function FilterDropdown({ handleClick }) {
  const defaultPrice = 120;
  const [maxPrice, setMaxPrice] = useState(defaultPrice);

  return (
    <RefineDropdown>
      <SizeSelector />

      <RangeSelector
        value={maxPrice}
        onChange={(e) => setMaxPrice(+e.target.value)}
      />

      <ColorSelector colors={colorsArr} />

      <ActionButton onClick={() => handleClick("filter")}>
        Apply filters
      </ActionButton>
    </RefineDropdown>
  );
}

export default FilterDropdown;
