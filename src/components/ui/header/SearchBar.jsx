import { useState } from "react";

import Icon from "../../common/Icon";

function Searchbar() {
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <div className="flex items-center">
      {showSearchbar && (
        <input
          type="text"
          placeholder="Search..."
          className="bg-pearl focus:ring-pearl w-64 rounded-md p-1 text-offblack placeholder-grey-400 focus:ring-1"
        />
      )}
      <Icon
        name="search"
        al="search"
        onClick={() => setShowSearchbar((prev) => !prev)}
      />
    </div>
  );
}

export default Searchbar;
