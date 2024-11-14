///////_____________H E A D E R_____________///////

import { useState } from "react";
import Icon from "./Icon";

//___H E A D E R____________________________//
export default function Header() {
  const navItems = [
    { id: "nav-new", text: "New" },
    { id: "nav-bags", text: "Bags" },
    { id: "nav-shoes", text: "Shoes" },
    { id: "nav-decor", text: "Decor" },
  ];

  const [activeItem, setActiveItem] = useState(null);
  const handleToggle = (id) => {
    setActiveItem((curId) => (curId === id ? null : id));
  };

  return (
    <header className="h-18 mt-4 flex items-center justify-between border border-solid border-offwhite font-bebas leading-normal text-offwhite">
      <Nav items={navItems} activeItem={activeItem} onToggle={handleToggle} />

      <h1 className="h-full cursor-pointer pt-0 text-5xl">Morning Star</h1>

      <UserAction activeItem={activeItem} onToggle={handleToggle} />
    </header>
  );
}

//___N A V__________________________________//
function Nav({ items, onToggle, activeItem }) {
  return (
    <nav className="h-full cursor-pointer">
      <ul className="md:text-1xl flex h-full items-center text-2xl">
        {items.map((li) => (
          <NavItem
            key={li.id}
            id={li.id}
            text={li.text}
            onToggle={onToggle}
            isActive={activeItem === li.id}
          />
        ))}
      </ul>
    </nav>
  );
}

//___N A V  L I_____________________________//
function NavItem({ id, text, onToggle, isActive }) {
  return (
    <li
      className={`flex h-full items-center border border-solid border-offwhite p-4 transition duration-200 ease-in hover:bg-offwhite hover:text-offblack ${isActive ? "bg-offwhite text-offblack" : "text-offwhite"}`}
      onClick={() => onToggle(id)}
    >
      {text}
    </li>
  );
}

//___U S E R  A C T I O N S_________________//
function UserAction({ activeItem, onToggle }) {
  const icons = [
    { id: "icon-person", name: "person" },
    { id: "icon-fav", name: "favorite" },
    { id: "icon-cart", name: "shopping_cart" },
  ];

  return (
    <div className="flex h-full cursor-pointer">
      <Searchbar />

      <ul className="flex h-full items-center text-2xl">
        {icons.map((icon) => (
          <li
            key={icon.id}
            id={icon.id}
            className={`group flex h-full items-center border border-solid border-offwhite hover:bg-offwhite hover:text-offblack ${activeItem === icon.id ? "bg-offwhite text-offblack" : "text-offwhite"}`}
            onClick={() => onToggle(icon.id)}
          >
            <Icon name={icon.name} al={icon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

//___S E A R C H B A R______________________//
function Searchbar() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 rounded-md bg-offwhite p-1 text-offblack placeholder-grey-400 focus:ring-1 focus:ring-offwhite"
      />
      <Icon name="search" al="search" />
    </div>
  );
}
