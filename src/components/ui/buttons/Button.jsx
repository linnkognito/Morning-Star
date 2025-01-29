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
      "bg-pearl text-offblack hover:bg-offblack hover:text-pearl hover:border-pearl",
    error:
      "w-full bg-offblack border border-pearl h-10 text-pearl font-bebas font-extralight uppercase tracking-widest mt-2 hover:bg-cherry transition-all duration-200",
    filter:
      "w-full h-full uppercase font-medium tracking-widest border border-pearl font-bebas text-lg text-pearl hover:bg-zest hover:text-offblack hover:border-zest",
  };

  if (type === "inverted")
    return (
      <button
        className={`${styles.primary} ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );

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
