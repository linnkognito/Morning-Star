function ActionButton({
  children,
  width = "w-[90%]",
  fontSize = "text-2xl",
  className = "",
  onClick = () => {},
}) {
  return (
    <button
      className={`${width} ${fontSize} ${className} mx-auto mt-2 flex grow items-center justify-center gap-1 rounded bg-pearl font-bebas leading-10 text-offblack shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:bg-zest`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionButton;
