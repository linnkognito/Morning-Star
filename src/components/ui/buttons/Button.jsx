function Button({
  children,
  disabled = false,
  type = "primary",
  onClick = () => {},
}) {
  const styles = {
    primary:
      "text-md w-fit border border-0 bg-offblack px-3 py-1 font-bebas font-extralight uppercase tracking-widest border-l border-r border-t border-b-2 border-transparent text-pearl hover:border-offblack hover:border-b-2 hover:bg-pearl hover:text-offblack transition-all duration-200",
    error:
      "w-full bg-offblack border border-pearl h-10 text-pearl font-bebas font-extralight uppercase tracking-widest mt-2 hover:bg-cherry transition-all duration-200",
  };

  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
