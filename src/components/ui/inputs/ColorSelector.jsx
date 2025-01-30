function ColorSelector({ colors = [], height = "h-[2em]" }) {
  return (
    <div className="flex w-full gap-2">
      {colors.map((col) => (
        <div
          key={col}
          className={`${col} ${height} grow rounded shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform hover:scale-105`}
        ></div>
      ))}
    </div>
  );
}

export default ColorSelector;
