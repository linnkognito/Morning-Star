import { useState } from "react";

import Icon from "../../common/Icon";
import NavItem from "./NavItem";

function Searchbar() {
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <div className="hidden items-center gap-2 md:flex">
      {showSearchbar && (
        <input
          type="text"
          placeholder="Search..."
          className="rounded-md bg-pearl p-1 text-offblack placeholder-grey-400 focus:ring-1 focus:ring-pearl md:w-64"
        />
      )}
      <NavItem onClick={() => setShowSearchbar((prev) => !prev)}>
        <Icon name="search" al="search" />
      </NavItem>
    </div>
  );
}

export default Searchbar;
