function ButtonTiny({
  children,
  className = "",
  width = "w-8",
  height = "h-8",
}) {
  return (
    <button
      className={`${className} ${width} ${height} flex items-center justify-center rounded bg-pearl px-1 py-1 uppercase text-offblack shadow-sm shadow-offblack transition-all duration-300 ease-out will-change-transform hover:scale-105 hover:bg-aura active:bg-zest`}
    >
      {children}
    </button>
  );
}

export default ButtonTiny;
