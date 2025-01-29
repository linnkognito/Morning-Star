function NavItem({
  children,
  id,
  onToggle,
  isActive,
  onClick = () => {},
  className = "",
}) {
  return (
    <li
      className={`${className} flex h-full items-center p-4 transition duration-200 ease-in hover:bg-pearl hover:text-offblack ${isActive ? "bg-pearl text-offblack" : "text-pearl"}`}
      onToggle={() => onToggle(id)}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
export default NavItem;
