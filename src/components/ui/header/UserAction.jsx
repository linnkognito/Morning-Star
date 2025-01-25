import { useNavigate } from "react-router";
import Searchbar from "./SearchBar";
import Icon from "../../common/Icon";

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

      <ul className="flex h-full items-center text-2xl">
        {icons.map((icon) => (
          <li
            key={icon.id}
            id={icon.id}
            className={`hover:bg-pearl group flex h-full items-center hover:text-offblack ${activeItem === icon.id ? "bg-pearl text-offblack" : "text-pearl"}`}
            onToggle={() => onToggle(icon.id)}
            onClick={() => navigate(icon.path)}
          >
            <Icon name={icon.name} al={icon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserAction;
