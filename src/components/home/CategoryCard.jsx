import ArrowButton from "../ui/buttons/ArrowButton";

function CategoryCard({
  color = "pearl",
  title,
  bgImage = "",
  border = "border-pearl",
  className = "",
}) {
  return (
    <div
      className={`${color} ${border} my-2 h-full w-1/4 border-2 ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <span className="relative flex h-full min-w-full items-end justify-start">
        {/* <div className="w-1/10 bg-pearl border-pearl border-5 absolute right-[-2px] h-full">
          Test
        </div> */}
        <div className="absolute right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ArrowButton />
        </div>

        <h2 className="ml-2 h-fit p-0 font-bebas text-[10vw] uppercase leading-none">
          {title}
        </h2>
      </span>
    </div>
  );
}

export default CategoryCard;
