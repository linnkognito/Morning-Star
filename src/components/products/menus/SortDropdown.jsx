import RefineDropdown from "./RefineDropdown";
import Button from "../../ui/buttons/Button";

const dropdown = {
  sort: [
    { id: 1, text: "New in" },
    { id: 2, text: "Price: Lowest first" },
    { id: 3, text: "Price: Highest first" },
  ],
};

function SortDropdown() {
  return (
    <RefineDropdown>
      {dropdown.sort.map((item) => (
        <Button
          key={item.id}
          type="filter"
          className="mt-1 border-0 bg-offblack text-pearl active:bg-pearl"
        >
          {item.text}
        </Button>
      ))}
    </RefineDropdown>
  );
}

export default SortDropdown;
