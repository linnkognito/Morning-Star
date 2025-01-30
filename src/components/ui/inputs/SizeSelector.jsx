const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

function SizeSelector() {
  return (
    <div className="flex items-center justify-evenly gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          className="h-fit w-full rounded bg-pearl py-1 uppercase text-offblack shadow-sm shadow-offblack transition-all duration-300 ease-out will-change-transform hover:scale-105 hover:bg-aura active:bg-zest"
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default SizeSelector;
