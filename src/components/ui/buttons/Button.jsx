function Button({
  children,
  disabled = false,
  type = "primary",
  className = "",
  onClick = () => {},
}) {
  const styles = {
    primary:
      "text-md w-fit border border-0 bg-offblack px-3 py-1 font-bebas font-extralight uppercase tracking-widest border-l border-r border-t border-b-2 border-transparent text-pearl hover:border-offblack hover:border-b-2 hover:bg-pearl hover:text-offblack transition-all duration-200",
    inverted:
      "text-md w-fit bg-pearl px-3 py-1 font-bebas font-extralight uppercase tracking-widest text-offblack border-2 border-offblack hover:border-pearl hover:bg-offblack hover:text-pearl transition-all duration-200",
    operations:
      "text-md w-full h-full bg-offblack px-3 py-1 font-bebas font-extralight uppercase tracking-widest text-pearl hover:bg-pearl hover:text-offblack transition-all duration-200 h-full w-full active:bg-aura active:text-offblack hover:bg-aura active:bg-pearl",
    error:
      "w-full bg-offblack border border-pearl h-10 text-pearl font-bebas font-extralight uppercase tracking-widest mt-2 hover:bg-cherry transition-all duration-200",
    filter:
      "h-full w-full border border-pearl font-bebas text-lg font-medium uppercase tracking-widest transition-all duration-200 hover:text-offblack hover:border-zest hover:bg-zest",
  };

  return (
    <button
      className={`${styles[type]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
