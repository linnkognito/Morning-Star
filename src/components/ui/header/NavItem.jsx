function NavItem({ children, id, onToggle, isActive, onClick }) {
  return (
    <li
      className={`hover:bg-pearl flex h-full items-center p-4 transition duration-200 ease-in hover:text-offblack ${isActive ? "bg-pearl text-offblack" : "text-pearl"}`}
      onToggle={() => onToggle(id)}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
export default NavItem;
