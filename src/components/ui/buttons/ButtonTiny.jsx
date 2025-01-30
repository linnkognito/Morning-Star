function ButtonTiny({ children }) {
  return (
    <button className="h-fit w-full rounded bg-pearl py-1 uppercase text-offblack shadow-sm shadow-offblack transition-all duration-300 ease-out will-change-transform hover:scale-105 hover:bg-aura active:bg-zest">
      {children}
    </button>
  );
}

export default ButtonTiny;
