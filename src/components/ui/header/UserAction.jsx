import { useNavigate } from "react-router";
import Searchbar from "./SearchBar";
import Icon from "../../common/Icon";
import NavItem from "./NavItem";

const icons = [
  { id: "icon-person", name: "person", path: "/profile" },
  { id: "icon-fav", name: "favorite", path: "/profile/favorites" },
  { id: "icon-cart", name: "shopping_cart", path: "/cart" },
];

function UserAction({ activeItem, onToggle }) {
  const navigate = useNavigate();

  return (
    <div className="flex h-full cursor-pointer">
      <Searchbar />

      <ul className="hidden h-full items-center text-2xl md:flex">
        {icons.map((icon) => (
          <NavItem
            key={icon.id}
            isActive={activeItem === icon.id}
            onToggle={() => onToggle(icon.id)}
            onClick={() => navigate(icon.path)}
          >
            <Icon name={icon.name} al={icon.name} />
          </NavItem>
        ))}
      </ul>
    </div>
  );
}
export default UserAction;
