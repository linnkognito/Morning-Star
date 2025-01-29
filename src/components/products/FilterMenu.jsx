import { useState } from "react";
import Button from "../ui/buttons/Button";
import ProductOptionsMenu from "./ProductOptionsMenu";
import FilterMenuButton from "./FilterMenuButton";

const dropdown = {
  sort: [
    { id: 1, text: "New in" },
    { id: 2, text: "Price: Lowest first" },
    { id: 3, text: "Price: Highest first" },
  ],
};

function FilterMenu() {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (button) => {
    isOpen === button ? setIsOpen(null) : setIsOpen(button);
    console.log(isOpen);
  };

  return (
    <div className="flex h-8 w-full max-w-[1284px] items-center justify-around gap-1">
      {/* Sort button */}
      <div className="relative w-full">
        <FilterMenuButton
          isOpen={isOpen === "sort"}
          onClick={() => handleClick("sort")}
        >
          Sort
        </FilterMenuButton>

        {/* Sort dropdown */}
        {isOpen === "sort" && (
          <div className="absolute w-full border-2 border-t-0 border-zest">
            {dropdown.sort.map((item) => (
              <Button
                key={item.id}
                type="filter"
                className="border-0 bg-offblack py-1 text-pearl active:bg-pearl"
              >
                {item.text}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Filter button */}
      <div className="relative w-full">
        <FilterMenuButton
          isOpen={isOpen === "filter"}
          onClick={() => handleClick("filter")}
        >
          Filter
        </FilterMenuButton>

        {/* Filter dropdown */}
        {isOpen === "filter" && (
          <div className="absolute w-full border-2 border-t-0 border-zest">
            <ProductOptionsMenu showActionButtons={false} />
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterMenu;
