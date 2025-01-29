export default function Icon({
  name = "",
  al = "",
  onClick = () => {},
  className,
}) {
  return (
    <span
      className={`${className} material-symbols-outlined text-2xl transition-transform duration-200 ease-in group-hover:scale-110`}
      aria-label={al}
      onClick={onClick}
    >
      {name}
    </span>
  );
}
