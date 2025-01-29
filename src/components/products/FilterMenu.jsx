import { useState } from "react";
import Button from "../ui/buttons/Button";

const dropdown = {
  sort: [
    { id: 1, text: "New in" },
    { id: 2, text: "Price: Lowest first" },
    { id: 3, text: "Price: Highest first" },
  ],
};

function FilterMenu() {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (e) => {
    if (isOpen) return setIsOpen(null);
    setIsOpen(e.target);
  };

  return (
    <div className="flex h-8 w-full max-w-[1284px] items-center justify-around gap-1">
      <div className="relative w-full">
        <Button type="filter" onClick={(e) => handleClick(e)}>
          Sort
        </Button>
        {isOpen && (
          <div className="absolute w-full border border-pearl bg-pearl">
            {dropdown.sort.map((item) => (
              <Button
                key={item.id}
                className="border-t-none border-r-none border-l-none w-full border-b-[1px] border-zest"
              >
                {item.text}
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="w-full">
        <Button type="filter" onClick={handleClick}>
          Filter
        </Button>
      </div>
    </div>
  );
}

export default FilterMenu;
