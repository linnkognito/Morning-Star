import { useNavigate } from "react-router";
import NavItem from "./NavItem";
import Icon from "../../common/Icon";

const navItems = [
  { id: "nav-new", text: "Home", path: "/" },
  { id: "nav-products", text: "Fashion", path: "/fashion" },
  { id: "nav-decor", text: "Decor", path: "/decor" },
  { id: "nav-new", text: "New In", path: "/new" },
];

function Nav({ onToggle, activeItem }) {
  const navigate = useNavigate();

  return (
    <nav className="h-full cursor-pointer">
      <NavItem className="xl:hidden">
        <Icon name="menu" />
      </NavItem>

      <ul className="xl:text-1xl hidden h-full items-center text-2xl xl:flex">
        {navItems.map((li) => (
          <NavItem
            key={li.id}
            id={li.id}
            onToggle={onToggle}
            isActive={activeItem === li.id}
            onClick={() => navigate(li.path)}
          >
            {li.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
