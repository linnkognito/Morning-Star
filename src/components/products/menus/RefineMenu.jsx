import { useState } from "react";
import RefineMenuButton from "./RefineMenuButton";
import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";

function RefineMenu() {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (button) => {
    isOpen === button ? setIsOpen(null) : setIsOpen(button);
  };

  return (
    <div className="flex h-8 w-full items-center justify-around gap-2">
      {/* Sort button */}
      <div className="relative w-full">
        <RefineMenuButton
          isOpen={isOpen === "sort"}
          onClick={() => handleClick("sort")}
        >
          Sort
        </RefineMenuButton>

        {/* Sort dropdown */}
        {isOpen === "sort" && (
          <div className="absolute z-[100] w-full">
            <SortDropdown />
          </div>
        )}
      </div>

      {/* Filter button */}
      <div className="relative w-full">
        <RefineMenuButton
          isOpen={isOpen === "filter"}
          onClick={() => handleClick("filter")}
        >
          Filter
        </RefineMenuButton>

        {/* Filter dropdown */}
        {isOpen === "filter" && (
          <div className="absolute z-[100] w-full">
            <FilterDropdown handleClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
}

export default RefineMenu;
