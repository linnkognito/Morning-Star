import { useState } from "react";
import Nav from "./Nav";
import UserAction from "./UserAction";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (id) => {
    setActiveItem((curId) => (curId === id ? null : id));
  };

  return (
    <header className="text-pearl flex h-auto w-full items-center justify-between font-bebas leading-normal">
      <Nav activeItem={activeItem} onToggle={handleToggle} />

      <h1 className="cursor-pointer text-5xl" onClick={() => navigate("/")}>
        Morning Star
      </h1>

      <UserAction activeItem={activeItem} onToggle={handleToggle} />
    </header>
  );
}
