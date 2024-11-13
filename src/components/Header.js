import { useState } from "react";
import Icon from "./Icon";

const navItems = [
  { text: "New" },
  { text: "Bags" },
  { text: "Shoes" },
  { text: "Decor" },
];

export default function Header() {
  const [curItem, setCurItem] = useState(0);

  const handleSelect = function (id) {
    setCurItem(id);
  };

  return (
    <header className="mt-4 flex h-14 items-center justify-between border border-solid border-offwhite font-bebas leading-normal text-offwhite">
      <Nav items={navItems} curItem={curItem} onSelect={handleSelect} />

      <h1 className="pt-1 text-5xl">Morning Star</h1>

      <UserAction />
    </header>
  );
}

function Nav({ items, onSelect }) {
  return (
    <nav className="h-full">
      <ul className="flex h-full items-center text-2xl">
        {items.map((li, i) => (
          <NavItem id={Number(i + 1)} text={li.text} onSelect={onSelect} />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ text, id, onSelect }) {
  return (
    <li
      className="flex h-full items-center border border-solid border-offwhite p-4"
      onClick={() => onSelect(id)}
    >
      {text}
    </li>
  );
}

function UserAction() {
  return (
    <div className="h-full">
      <ul className="flex h-full items-center text-2xl">
        <li className="flex h-full items-center border border-solid border-offwhite p-4">
          <Icon name="person" color="#ffffe4" />
        </li>
        <li className="flex h-full items-center border border-solid border-offwhite p-4">
          <Icon name="favorite" color="#ffffe4" />
        </li>
        <li className="flex h-full items-center border border-solid border-offwhite p-4">
          <Icon name="shopping_cart" color="#ffffe4" />
        </li>
      </ul>
    </div>
  );
}
