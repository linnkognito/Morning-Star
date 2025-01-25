function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-pearl flex flex-col border border-l-4 border-offblack px-6 py-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
